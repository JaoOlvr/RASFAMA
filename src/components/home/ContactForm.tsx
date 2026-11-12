'use client';

import React, { useState, useEffect } from 'react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ShieldCheck,
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  HelpCircle
} from 'lucide-react';
import { AREAS_OF_WORK } from '@/data/areas';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    profession: '',
    subject: 'saude',
    message: '',
    isVolunteer: false,
    isSocialActions: false,
    lgpdAccepted: false,
    _website_catch: '', // Honeypot anti-spam
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Escuta evento para pré-selecionar área ao clicar em "Faça sua denúncia"
  useEffect(() => {
    const handlePrefill = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setFormData((prev) => ({ ...prev, subject: customEvent.detail }));
      }
    };
    window.addEventListener('prefill-area', handlePrefill);
    return () => window.removeEventListener('prefill-area', handlePrefill);
  }, []);

  // Máscara brasileira para telefone: (99) 99999-9999 ou (99) 9999-9999
  const formatPhone = (val: string) => {
    const clean = val.replace(/\D/g, '').slice(0, 11);
    if (clean.length <= 2) return clean;
    if (clean.length <= 6) return `(${clean.slice(0, 2)}) ${clean.slice(2)}`;
    if (clean.length <= 10) return `(${clean.slice(0, 2)}) ${clean.slice(2, 6)}-${clean.slice(6)}`;
    return `(${clean.slice(0, 2)}) ${clean.slice(2, 7)}-${clean.slice(7, 11)}`;
  };

  const validateField = (name: string, value: any): string => {
    switch (name) {
      case 'name':
        if (!value || value.trim().length < 3) return 'Informe seu nome completo (ao menos 3 letras).';
        return '';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value || !emailRegex.test(value.trim())) return 'Informe um e-mail válido (ex: nome@exemplo.com).';
        return '';
      case 'phone':
        const digits = value.replace(/\D/g, '');
        if (digits.length < 10) return 'Informe um telefone com DDD válido.';
        return '';
      case 'city':
        if (!value || value.trim().length < 2) return 'Informe sua cidade / município.';
        return '';
      case 'profession':
        if (!value || value.trim().length < 2) return 'Informe sua profissão ou ocupação atual.';
        return '';
      case 'lgpdAccepted':
        if (!value) return 'É necessário aceitar os termos da LGPD para continuarmos.';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    let finalValue: any = value;

    if (type === 'checkbox') {
      finalValue = (e.target as HTMLInputElement).checked;
    } else if (name === 'phone') {
      finalValue = formatPhone(value);
    }

    setFormData((prev) => ({ ...prev, [name]: finalValue }));

    // Validação imediata se já tiver sido tocado
    if (touched[name]) {
      const err = validateField(name, finalValue);
      setErrors((prev) => ({ ...prev, [name]: err }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const finalValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const err = validateField(name, finalValue);
    setErrors((prev) => ({ ...prev, [name]: err }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validação geral de todos os campos
    const newErrors: Record<string, string> = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      phone: validateField('phone', formData.phone),
      city: validateField('city', formData.city),
      profession: validateField('profession', formData.profession),
      lgpdAccepted: validateField('lgpdAccepted', formData.lgpdAccepted),
    };

    setTouched({
      name: true,
      email: true,
      phone: true,
      city: true,
      profession: true,
      lgpdAccepted: true,
    });

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((err) => !!err);
    if (hasErrors) {
      const firstErrorKey = Object.keys(newErrors).find((k) => newErrors[k]);
      if (firstErrorKey) {
        document.getElementById(firstErrorKey)?.focus();
      }
      return;
    }

    // Proteção honeypot anti-spam
    if (formData._website_catch) {
      console.warn('Spam detectado');
      setStatus('success');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.message || 'Falha ao registrar solicitação. Tente novamente.');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        city: '',
        profession: '',
        subject: 'saude',
        message: '',
        isVolunteer: false,
        isSocialActions: false,
        lgpdAccepted: false,
        _website_catch: '',
      });
      setTouched({});
      setErrors({});
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Não foi possível enviar sua solicitação no momento. Você também pode nos contatar pelo WhatsApp.');
    }
  };

  return (
    <section id="atendimento" className="py-20 bg-surface/30 border-t border-primary/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-accent tracking-widest uppercase mb-3">
            <ShieldCheck className="w-4 h-4" aria-hidden="true" />
            <span>Acolhimento Confidencial</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-body tracking-tight mb-4">
            Solicitar Atendimento & Cadastro
          </h2>
          <p className="text-muted text-base">
            Conte-nos sua necessidade ou interesse. Nossa equipe entrará em contato com a atenção e o respeito que você merece.
          </p>
        </div>

        <div className="bg-background border border-primary/20 rounded-3xl p-6 sm:p-10 shadow-card">
          {status === 'success' ? (
            <div
              role="alert"
              className="text-center py-12 px-4 animate-in fade-in duration-300 flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-accent/20 text-accent flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-body mb-3">
                Solicitação Recebida com Sucesso!
              </h3>
              <p className="text-muted text-base max-w-lg mb-8 leading-relaxed">
                Agradecemos o seu contato. Seus dados foram registrados com sigilo e segurança. Nossa equipe da RASFAMA analisará o seu relato e entrará em contato em breve pelo telefone ou e-mail informado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="btn-primary text-sm"
                >
                  Enviar Nova Mensagem
                </button>
                <a
                  href="https://wa.me/5598984374350"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent text-sm"
                >
                  Falar no WhatsApp Imediatamente
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Campo Honeypot Oculto (Anti-Spam) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="_website_catch">Não preencha este campo se for humano</label>
                <input
                  type="text"
                  id="_website_catch"
                  name="_website_catch"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData._website_catch}
                  onChange={handleChange}
                />
              </div>

              {/* Mensagem de Erro Geral */}
              {status === 'error' && (
                <div
                  role="alert"
                  className="p-4 rounded-xl bg-danger/10 border border-danger/30 text-danger text-sm flex items-start gap-3"
                >
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <strong className="block font-semibold">Ocorreu um erro no envio:</strong>
                    <span>{errorMessage}</span>
                  </div>
                </div>
              )}

              {/* Linha 1: Nome e E-mail */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-body mb-2">
                    Nome Completo <span className="text-danger">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Ex: Maria José da Silva"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      className={`w-full px-4 py-3.5 pl-11 rounded-xl bg-surface/50 border text-body text-base placeholder:text-muted/60 focus:bg-background transition-colors ${
                        errors.name ? 'border-danger focus:ring-danger' : 'border-primary/20 focus:border-primary'
                      }`}
                    />
                    <User className="w-5 h-5 text-muted absolute left-3.5 top-4 pointer-events-none" aria-hidden="true" />
                  </div>
                  {errors.name && (
                    <p id="name-error" className="mt-1.5 text-xs text-danger font-medium">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-body mb-2">
                    E-mail <span className="text-danger">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="seu.email@exemplo.com"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={`w-full px-4 py-3.5 pl-11 rounded-xl bg-surface/50 border text-body text-base placeholder:text-muted/60 focus:bg-background transition-colors ${
                        errors.email ? 'border-danger focus:ring-danger' : 'border-primary/20 focus:border-primary'
                      }`}
                    />
                    <Mail className="w-5 h-5 text-muted absolute left-3.5 top-4 pointer-events-none" aria-hidden="true" />
                  </div>
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-xs text-danger font-medium">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Linha 2: Telefone, Cidade e Profissão */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-body mb-2">
                    Telefone / WhatsApp <span className="text-danger">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="(98) 98765-4321"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                      className={`w-full px-4 py-3.5 pl-11 rounded-xl bg-surface/50 border text-body text-base placeholder:text-muted/60 focus:bg-background transition-colors ${
                        errors.phone ? 'border-danger focus:ring-danger' : 'border-primary/20 focus:border-primary'
                      }`}
                    />
                    <Phone className="w-5 h-5 text-muted absolute left-3.5 top-4 pointer-events-none" aria-hidden="true" />
                  </div>
                  {errors.phone && (
                    <p id="phone-error" className="mt-1.5 text-xs text-danger font-medium">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-semibold text-body mb-2">
                    Cidade / Município <span className="text-danger">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="city"
                      name="city"
                      required
                      placeholder="Ex: São Luís"
                      value={formData.city}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={!!errors.city}
                      aria-describedby={errors.city ? 'city-error' : undefined}
                      className={`w-full px-4 py-3.5 pl-11 rounded-xl bg-surface/50 border text-body text-base placeholder:text-muted/60 focus:bg-background transition-colors ${
                        errors.city ? 'border-danger focus:ring-danger' : 'border-primary/20 focus:border-primary'
                      }`}
                    />
                    <MapPin className="w-5 h-5 text-muted absolute left-3.5 top-4 pointer-events-none" aria-hidden="true" />
                  </div>
                  {errors.city && (
                    <p id="city-error" className="mt-1.5 text-xs text-danger font-medium">
                      {errors.city}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="profession" className="block text-sm font-semibold text-body mb-2">
                    Profissão / Ocupação <span className="text-danger">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="profession"
                      name="profession"
                      required
                      placeholder="Ex: Autônomo, Estudante"
                      value={formData.profession}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={!!errors.profession}
                      aria-describedby={errors.profession ? 'profession-error' : undefined}
                      className={`w-full px-4 py-3.5 pl-11 rounded-xl bg-surface/50 border text-body text-base placeholder:text-muted/60 focus:bg-background transition-colors ${
                        errors.profession ? 'border-danger focus:ring-danger' : 'border-primary/20 focus:border-primary'
                      }`}
                    />
                    <Briefcase className="w-5 h-5 text-muted absolute left-3.5 top-4 pointer-events-none" aria-hidden="true" />
                  </div>
                  {errors.profession && (
                    <p id="profession-error" className="mt-1.5 text-xs text-danger font-medium">
                      {errors.profession}
                    </p>
                  )}
                </div>
              </div>

              {/* Assunto (Seleção das Áreas) */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-body mb-2">
                  Assunto Principal / Área de Interesse <span className="text-danger">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl bg-surface/50 border border-primary/20 text-body text-base focus:bg-background focus:border-primary transition-colors cursor-pointer"
                >
                  {AREAS_OF_WORK.map((area) => (
                    <option key={area.id} value={area.id}>
                      {area.title} — {area.shortDesc.slice(0, 50)}...
                    </option>
                  ))}
                  <option value="outro">Outro assunto ou apoio geral</option>
                </select>
              </div>

              {/* Mensagem / Relato */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-body mb-2">
                  Mensagem ou Relato da Situação (opcional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Escreva com suas próprias palavras o que está acontecendo e como podemos te orientar..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-surface/50 border border-primary/20 text-body text-base placeholder:text-muted/60 focus:bg-background focus:border-primary transition-colors resize-y"
                />
              </div>

              {/* Checkboxes de Interesse Social */}
              <div className="p-4 bg-surface/50 rounded-2xl border border-primary/10 space-y-3">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="isVolunteer"
                    checked={formData.isVolunteer}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 rounded text-primary focus:ring-accent border-primary/30"
                  />
                  <span className="text-sm text-body font-medium">
                    Deseja ser voluntário(a) e doar parte do seu tempo e conhecimento à RASFAMA?
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="isSocialActions"
                    checked={formData.isSocialActions}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 rounded text-primary focus:ring-accent border-primary/30"
                  />
                  <span className="text-sm text-body font-medium">
                    Deseja participar de ações sociais, mutirões de cidadania e campanhas solidárias?
                  </span>
                </label>
              </div>

              {/* Termo de Aceite LGPD Obrigatório */}
              <div className="p-4 bg-surface/40 rounded-2xl border border-primary/15">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    id="lgpdAccepted"
                    name="lgpdAccepted"
                    required
                    checked={formData.lgpdAccepted}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!errors.lgpdAccepted}
                    aria-describedby={errors.lgpdAccepted ? 'lgpd-error' : undefined}
                    className="mt-1 w-5 h-5 rounded text-primary focus:ring-accent border-primary/30"
                  />
                  <span className="text-xs sm:text-sm text-muted leading-relaxed">
                    Em conformidade com a <strong>LGPD – Lei nº 13.709/2018</strong>, tratamos seus dados com responsabilidade, transparência e segurança, usando-os apenas para atendimento, comunicação e melhoria dos serviços. <span className="text-danger">*</span>
                  </span>
                </label>
                {errors.lgpdAccepted && (
                  <p id="lgpd-error" className="mt-2 text-xs text-danger font-medium pl-8">
                    {errors.lgpdAccepted}
                  </p>
                )}
              </div>

              {/* Botão de Envio */}
              <div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full text-base sm:text-lg py-4 rounded-xl justify-center shadow-soft disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                      <span>Enviando solicitação com segurança...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" aria-hidden="true" />
                      <span>Enviar Solicitação de Atendimento</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

