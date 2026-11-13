'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Maximize, Film, Volume2, VolumeX, RotateCcw, Smartphone, Monitor } from 'lucide-react';

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(false);

  // Detecta se é visualização mobile (< 768px) para carregar o vídeo vertical otimizado
  useEffect(() => {
    const mql = window.matchMedia('(max-width: 767px)');
    setIsMobile(mql.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    mql.addEventListener('change', handleChange);
    return () => mql.removeEventListener('change', handleChange);
  }, []);

  // Quando trocar entre mobile (vertical) e desktop (horizontal), recarrega o vídeo
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.load();
    if (isPlaying) {
      video.play().catch(() => {});
    }
  }, [isMobile]);

  // Intersection Observer: reproduz quando visível na tela e pausa ao sair da tela
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      video.pause();
      setIsPlaying(false);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().then(() => setIsPlaying(true)).catch(() => {});
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    const currentProgress = (video.currentTime / video.duration) * 100;
    setProgress(currentProgress);
  };

  const handleFullscreen = () => {
    const container = containerRef.current;
    if (!container) return;
    if (!document.fullscreenElement) {
      container.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const handleRestart = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.play().catch(() => {});
    setIsPlaying(true);
  };

  const videoSource = isMobile
    ? '/assets/rasfama-vertical.mp4'
    : '/assets/rasfama-horizontal.mp4';

  const posterSource = isMobile
    ? '/assets/video-thumb-vertical.jpg'
    : '/assets/video-thumb.jpg';

  return (
    <section
      aria-label="Vídeo institucional da RASFAMA"
      className="py-20 sm:py-24 bg-gradient-to-b from-surface/40 via-background to-surface/40 border-y border-primary/15 relative overflow-hidden"
    >
      {/* Luzes decorativas sutis de fundo */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho da Seção de Vídeo */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-accent tracking-widest uppercase mb-3 px-3.5 py-1.5 rounded-full bg-background border border-primary/20 shadow-sm">
            <Film className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Nossa Atuação em Movimento</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-body tracking-tight mb-4">
            Conheça a Força da Nossa Causa
          </h2>

          <p className="text-muted text-base sm:text-lg">
            Veja como acolhemos, defendemos direitos e fortalecemos famílias em situação de vulnerabilidade em todo o Maranhão.
          </p>

          {/* Badge Informativo do Formato Adaptativo */}
          <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-muted">
            {isMobile ? (
              <>
                <Smartphone className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                <span>Formato vertical otimizado para celular</span>
              </>
            ) : (
              <>
                <Monitor className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                <span>Formato widescreen horizontal Full HD</span>
              </>
            )}
          </div>
        </div>

        {/* Moldura do Player: Vertical (9:16) no mobile e Horizontal (16:9) no desktop */}
        <div
          ref={containerRef}
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
          className={`relative rounded-3xl overflow-hidden shadow-float border border-primary/20 bg-navy group mx-auto transition-all duration-300 ${
            isMobile
              ? 'aspect-[9/16] w-full max-w-[320px] sm:max-w-[360px]'
              : 'aspect-video w-full max-w-5xl'
          }`}
        >
          {/* Elemento de Vídeo com Carregamento Inteligente */}
          <video
            ref={videoRef}
            src={videoSource}
            poster={posterSource}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            onTimeUpdate={handleTimeUpdate}
            onClick={togglePlay}
            className="w-full h-full object-cover cursor-pointer"
            aria-label="Vídeo institucional da RASFAMA"
          />

          {/* Barra de Progresso do Vídeo no Topo */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-white/20 z-20">
            <div
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-150"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Selo Flutuante de Status */}
          <div className="absolute top-3.5 left-3.5 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-navy/85 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs font-medium shadow-sm">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
            <span>{isMobile ? 'Vídeo Mobile · RASFAMA' : 'Vídeo Institucional · RASFAMA'}</span>
          </div>

          {/* Ícone Central de Play quando pausado */}
          {!isPlaying && (
            <button
              type="button"
              onClick={togglePlay}
              className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-navy/70 hover:bg-navy/90 text-white backdrop-blur-md border border-white/30 flex items-center justify-center transition-all z-20 shadow-float"
              aria-label="Reproduzir vídeo"
            >
              <Play className="w-8 h-8 fill-current translate-x-0.5 text-accent" />
            </button>
          )}

          {/* Overlay com Controles Interativos (visíveis no hover ou quando pausado) */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-navy/95 via-transparent to-transparent flex flex-col justify-end p-4 sm:p-6 transition-opacity duration-300 z-20 ${
              showControls || !isPlaying ? 'opacity-100' : 'opacity-0 sm:opacity-0'
            }`}
          >
            <div className="flex items-center justify-between gap-3 text-white">
              {/* Controles de Reprodução e Áudio */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={togglePlay}
                  className="tap-target w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-navy backdrop-blur-md flex items-center justify-center transition-all shadow-md active:scale-95"
                  aria-label={isPlaying ? 'Pausar vídeo' : 'Reproduzir vídeo'}
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 fill-current" />
                  ) : (
                    <Play className="w-4 h-4 fill-current translate-x-0.5" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleRestart}
                  className="tap-target w-9 h-9 rounded-full bg-white/10 hover:bg-white/30 text-white backdrop-blur-md flex items-center justify-center transition-all"
                  aria-label="Reiniciar vídeo do início"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={toggleMute}
                  className="tap-target w-9 h-9 rounded-full bg-white/10 hover:bg-white/30 text-white backdrop-blur-md flex items-center justify-center transition-all"
                  aria-label={isMuted ? 'Ativar áudio' : 'Desativar áudio'}
                >
                  {isMuted ? (
                    <VolumeX className="w-3.5 h-3.5" />
                  ) : (
                    <Volume2 className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Informação e Botão Tela Cheia */}
              <div className="flex items-center gap-2.5">
                <span className="text-[11px] text-white/80 font-mono hidden sm:inline">
                  {isMobile ? 'Vertical HD' : '1080p Full HD'}
                </span>

                <button
                  type="button"
                  onClick={handleFullscreen}
                  className="tap-target w-9 h-9 rounded-full bg-white/10 hover:bg-white/30 text-white backdrop-blur-md flex items-center justify-center transition-all"
                  aria-label="Visualizar em tela cheia"
                >
                  <Maximize className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
