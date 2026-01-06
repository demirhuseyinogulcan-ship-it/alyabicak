/**
 * Footer Component
 * Site footer'ı - siteConfig ve footerNavigation kullanır
 */

'use client'

import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Globe } from 'lucide-react'
import { categoryService } from '@/lib/services'
import { siteConfig, footerNavigation, getWhatsAppUrl, getPhoneUrl, getEmailUrl } from '@/lib/config'
import { Logo } from '@/components/layout'
import { Button } from '@/components/ui'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const categories = categoryService.getAllCategoriesWithCounts()

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
              {siteConfig.company.yearsOfExperience} yılı aşkın süredir Sanayi Jiletleri ve Makine Bıçakları alanında endüstrinin lider firmalarına hizmet veriyoruz.
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
              {/* Placeholder sosyal medya butonları - henüz link yok */}
              {!siteConfig.social.facebook && !siteConfig.social.instagram && !siteConfig.social.linkedin && (
                <>
                  <span className="w-8 h-8 bg-steel-800 rounded-full flex items-center justify-center opacity-50 cursor-not-allowed">
                    <Facebook className="w-4 h-4" />
                  </span>
                  <span className="w-8 h-8 bg-steel-800 rounded-full flex items-center justify-center opacity-50 cursor-not-allowed">
                    <Instagram className="w-4 h-4" />
                  </span>
                  <span className="w-8 h-8 bg-steel-800 rounded-full flex items-center justify-center opacity-50 cursor-not-allowed">
                    <Linkedin className="w-4 h-4" />
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-medium mb-3 uppercase tracking-wide">Hızlı Erişim</h3>
            <ul className="space-y-1.5">
              {footerNavigation.quickLinks.map((link) => (
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
            <h3 className="text-sm font-medium mb-3 uppercase tracking-wide">Kategoriler</h3>
            <ul className="space-y-1.5">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link 
                    href={`/kategoriler/${category.slug}`} 
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
            <h3 className="text-sm font-medium mb-3 uppercase tracking-wide">İletişim</h3>
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
                href={getWhatsAppUrl()} 
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
              © {currentYear} {siteConfig.company.legalName} Tüm hakları saklıdır.
            </p>
            <div className="flex gap-6 text-sm">
              {footerNavigation.legal.map((link) => (
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
