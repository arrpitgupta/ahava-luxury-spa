import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { business } from '../config/business';
import { ShieldCheck, Lock, Mail, Phone, ArrowRight } from 'lucide-react';

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy | Ahava Luxury Spa";
  }, []);

  return (
    <div className="bg-[#FAF6F0] text-[#2C2621] min-h-screen">
      {/* Page Hero */}
      <PageHero
        eyebrow="CLIENT PRIVACY & TRUST"
        title="PRIVACY"
        italicTitle="POLICY"
        description="Our commitment to safeguarding the personal information and confidentiality of our esteemed guests."
        breadcrumbs={[{ label: 'Privacy Policy' }]}
        bgImage="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=80"
      />

      {/* Main Content Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Elegant Card Container */}
          <div className="bg-[#FFFDF9] border border-[#C6A66B]/30 rounded-lg p-8 sm:p-12 lg:p-16 shadow-luxury relative overflow-hidden">
            
            {/* Subtle decorative gold top-accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C6A66B] to-transparent"></div>

            {/* Header Badge & Title */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#FAF6F0] border border-[#C6A66B]/40 flex items-center justify-center text-[#C6A66B] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#C6A66B] font-semibold block">
                  Data Protection & Privacy
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#2C2621] font-light">
                  Ahava Luxury Spa Privacy Statement
                </h2>
              </div>
            </div>

            {/* Primary Policy Content */}
            <div className="pt-4 border-t border-[#C6A66B]/20">
              <p className="font-sans text-base sm:text-lg text-[#4A423A] font-light leading-relaxed sm:leading-loose tracking-wide">
                Ahava Luxury Spa respects the privacy of its current and potential customers. We collect only the information necessary to respond to inquiries, manage appointments, provide services, and communicate with customers. Customer information is kept confidential and is not sold or shared with unauthorized third parties. Access to customer information is limited to authorized staff, and reasonable security measures are used to protect personal information from unauthorized access, loss, or misuse. We retain customer information only as necessary for legitimate business purposes and applicable requirements.
              </p>
            </div>

            {/* Key Assurance Highlights (Derived strictly from policy content) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 mt-10 border-t border-[#C6A66B]/20 text-xs font-sans">
              <div className="p-4 bg-[#FAF6F0]/70 rounded border border-[#C6A66B]/20 space-y-1.5">
                <div className="flex items-center gap-2 text-[#C6A66B] font-medium">
                  <Lock className="w-4 h-4" />
                  <span className="uppercase tracking-wider font-semibold">Confidential</span>
                </div>
                <p className="text-[#786C60] font-light leading-relaxed">
                  Information is never sold or shared with unauthorized third parties.
                </p>
              </div>

              <div className="p-4 bg-[#FAF6F0]/70 rounded border border-[#C6A66B]/20 space-y-1.5">
                <div className="flex items-center gap-2 text-[#C6A66B] font-medium">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="uppercase tracking-wider font-semibold">Protected</span>
                </div>
                <p className="text-[#786C60] font-light leading-relaxed">
                  Reasonable security measures safeguard data against unauthorized access.
                </p>
              </div>

              <div className="p-4 bg-[#FAF6F0]/70 rounded border border-[#C6A66B]/20 space-y-1.5">
                <div className="flex items-center gap-2 text-[#C6A66B] font-medium">
                  <Mail className="w-4 h-4" />
                  <span className="uppercase tracking-wider font-semibold">Purpose-Bound</span>
                </div>
                <p className="text-[#786C60] font-light leading-relaxed">
                  Used solely to manage appointments, inquiries, and customer care.
                </p>
              </div>
            </div>

            {/* Sanctuary Inquiries & Contact Box */}
            <div className="mt-12 pt-8 border-t border-[#C6A66B]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="space-y-1">
                <h4 className="font-serif text-lg text-[#2C2621]">Have Questions Regarding Your Information?</h4>
                <p className="text-xs font-sans text-[#786C60] font-light">
                  Our concierge team is available daily ({business.openingHours}) to assist you.
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-[#C6A66B] pt-1">
                  <a href={`mailto:${business.email}`} className="hover:underline flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5" />
                    <span>{business.email}</span>
                  </a>
                  <span>•</span>
                  <a href={`tel:${business.phone}`} className="hover:underline flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5" />
                    <span>{business.phone}</span>
                  </a>
                </div>
              </div>

              <Link
                to="/contact"
                className="px-6 py-3 bg-[#C6A66B] hover:bg-[#a8884c] text-[#FAF6F0] rounded-sm text-xs font-sans uppercase tracking-widest font-semibold transition-all shadow-gold-glow flex items-center gap-2 shrink-0"
              >
                <span>Contact Desk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
