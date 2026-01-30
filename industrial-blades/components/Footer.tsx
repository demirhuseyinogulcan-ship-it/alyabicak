/**
 * Footer Component
 * Site footer'ı - i18n destekli
 */

'use client'

import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Globe, MessageCircle } from 'lucide-react'
import { categoryService } from '@/lib/services'
import { siteConfig, footerNavigation, getWhatsAppUrl, getPhoneUrl, getEmailUrl } from '@/lib/config'
import { Logo } from '@/components/layout'
import { Button } from '@/components/ui'
import { useLocale, useTranslation } from '@/components/providers/LocaleProvider'

// Helper function to get nested dictionary value
function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const keys = path.split('.')
  let value: unknown = obj
  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = (value as Record<string, unknown>)[key]
    } else {
      return path
    }
  }
  return typeof value === 'string' ? value : path
}

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  // i18n
  const { locale } = useLocale()
  const dict = useTranslation()

  // Kategorileri servis üzerinden al (artık çevrilmiş olarak gelir)
  const categories = categoryService.getAllCategoriesWithCounts(locale)

  // Localized footer navigation
  const localizedQuickLinks = footerNavigation.quickLinks.map(link => ({
    ...link,
    title: getNestedValue(dict as Record<string, unknown>, link.titleKey),
    href: `/${locale}${link.href}`,
  }))

  const localizedLegalLinks = footerNavigation.legal.map(link => ({
    ...link,
    title: getNestedValue(dict as Record<string, unknown>, link.titleKey),
    href: `/${locale}${link.href}`,
  }))

  // Localized company description
  const companyDesc = locale === 'tr'
    ? `${siteConfig.company.yearsOfExperience} yılı aşkın süredir Sanayi Jiletleri ve Makine Bıçakları alanında endüstrinin lider firmalarına hizmet veriyoruz.`
    : `Serving industry leaders in Industrial Blades and Machine Knives for over ${siteConfig.company.yearsOfExperience} years.`

  return (
    <footer className="bg-steel-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-sm font-medium text-white mb-4 uppercase tracking-wide">
              {siteConfig.company.legalName}
            </h3>
            <p className="text-steel-400 text-sm mb-3 leading-relaxed">
              {companyDesc}
            </p>
            <a
              href={siteConfig.mainSiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-primary-400 hover:text-primary-300 transition-colors mb-4"
            >
              <Globe className="w-3.5 h-3.5" />
              www.alyatekstil.com
            </a>
            
            {/* Social Links */}
            <div className="flex gap-2">
              {siteConfig.social.facebook && (
                <a 
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-steel-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              )}
              {siteConfig.social.instagram && (
                <a 
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-steel-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {siteConfig.social.linkedin && (
                <a 
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-steel-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {siteConfig.social.wechat && (
                <a 
                  href={`weixin://dl/chat?${siteConfig.social.wechat}`}
                  title={`WeChat: ${siteConfig.social.wechat}`}
                  className="w-8 h-8 bg-steel-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
                  aria-label="WeChat"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.045c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.001-.272-.005-.406-.003v-.028zm-2.093 3.223c.534 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.435-.982.97-.982zm4.842 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"/>
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-medium mb-3 uppercase tracking-wide">{dict.footer.quickLinks}</h3>
            <ul className="space-y-1.5">
              {localizedQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-steel-400 text-sm hover:text-white transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-medium mb-3 uppercase tracking-wide">{dict.footer.categories}</h3>
            <ul className="space-y-1.5">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link 
                    href={`/${locale}/categories/${category.slug}`} 
                    className="text-steel-400 text-sm hover:text-white transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-medium mb-3 uppercase tracking-wide">{dict.footer.contact}</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                <span className="text-steel-400 text-sm">
                  {siteConfig.contact.address.line1}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary-500 flex-shrink-0" />
                <a 
                  href={getPhoneUrl()} 
                  className="text-steel-400 text-sm hover:text-white transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary-500 flex-shrink-0" />
                <a 
                  href={getEmailUrl()} 
                  className="text-steel-400 text-sm hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>

            {/* WhatsApp Button */}
            <div className="mt-3">
              <Button 
                href={getWhatsAppUrl(dict.whatsapp?.defaultMessage || (locale === 'tr' ? 'Merhaba' : 'Hello'))} 
                variant="whatsapp" 
                size="sm"
              >
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-steel-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-steel-400 text-sm">
              © {currentYear} {siteConfig.company.legalName} {dict.footer.rights}
            </p>
            <div className="flex gap-6 text-sm">
              {localizedLegalLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className="text-steel-400 hover:text-white transition-colors"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
