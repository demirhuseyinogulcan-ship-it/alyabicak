import { Metadata } from 'next'
import { generateMetadata as generateSeoMetadata } from '@/lib/seo'
import { siteConfig } from '@/lib/config'
import { i18nConfig, Locale } from '@/lib/i18n/config'

interface PageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  
  const titles = {
    tr: 'Çerez Politikası',
    en: 'Cookie Policy',
    ar: 'سياسة ملفات تعريف الارتباط',
    ru: 'Политика использования файлов cookie',
  }
  
  const descriptions = {
    tr: 'Alya Bıçak web sitesi çerez kullanım politikası. Hangi çerezleri kullandığımız ve tercihlerinizi nasıl yönetebileceğiniz hakkında bilgi.',
    en: 'Alya Blades website cookie usage policy. Information about what cookies we use and how you can manage your preferences.',
    ar: 'سياسة استخدام ملفات تعريف الارتباط لموقع أليا للشفرات. معلومات حول ملفات تعريف الارتباط التي نستخدمها وكيف يمكنك إدارة تفضيلاتك.',
    ru: 'Политика использования файлов cookie веб-сайта Alya Blades. Информация о том, какие файлы cookie мы используем и как вы можете управлять своими предпочтениями.',
  }
  
  return generateSeoMetadata({
    title: titles[locale] || titles.tr,
    description: descriptions[locale] || descriptions.tr,
    url: `https://www.alyabicak.com/${locale}/cookie-policy`,
  })
}

// İçerik objeleri - dil bazlı
const content = {
  tr: {
    pageTitle: 'Çerez Politikası',
    subtitle: 'Web sitemizde kullanılan çerezler hakkında bilgilendirme',
    sections: {
      whatIsCookie: {
        title: 'Çerez Nedir?',
        description: 'Çerez veya bilinen ismiyle "cookie", mobil ve masaüstü cihazlar kullanarak tarayıcılar üzerinden internet sitelerini ziyaret ettiğinizde bilgisayarınız veya mobil cihazınıza kaydedilen küçük metin dosyalarıdır. Genellikle ziyaret ettiğiniz internet sitesini kullanmanız sırasında size kişiselleştirilmiş bir deneyim sunmak, sunulan hizmetleri geliştirmek ve deneyiminizi iyileştirmek için kullanılır.',
      },
      whatFor: {
        title: 'Ne için Kullanılır?',
        description: 'Çerezler, internet sitelerinin daha kolay kullanılması, kullanıcıların ilgi ve ihtiyaçlarınıza göre ayarlanması amacıyla kullanılır. Bu sayede kullanıcının tanınması ve tercih ayarlarının hatırlanması sağlanır.',
      },
      types: {
        title: 'Türlerine Göre Çerezler',
        essential: {
          title: 'Zorunlu/Teknik Çerezler',
          description: 'Ziyaret ettiğiniz internet sitesinin düzgün şekilde çalışabilmesi için zorunlu çerezlerdir. Bu tür çerezlerin amacı, sitenin çalışmasını sağlamak yoluyla gerekli hizmet sunmaktır. Örneğin, internet sitesinin güvenli bölümlerine erişmeye olanak verir.',
        },
        analytical: {
          title: 'Analitik Çerezler',
          description: 'İnternet sitesinin kullanım şekli, ziyaret sıklığı ve sayısı hakkında bilgi toplar. Bu tür çerezlerin kullanım amacı, sitenin işleyiş biçimini iyileştirerek performans arttırmaktır. Ziyaretçi kimliklerinin tespitini sağlayabilecek verileri içermezler.',
        },
        functional: {
          title: 'İşlevsel/Fonksiyonel Çerezler',
          description: 'Ziyaretçinin site içerisinde yaptığı seçimleri kaydederek bir sonraki ziyarette hatırlar. Bu tür çerezlerin amacı ziyaretçilere kullanım kolaylığı sağlamaktır. Örneğin, dil tercihinizi hatırlar.',
        },
      },
      usedCookies: {
        title: 'İnternet Sitemizde Kullanılan Çerezler',
        tableHeaders: {
          cookie: 'Çerez',
          purpose: 'Amacı',
          type: 'Tipi',
          duration: 'Süre',
        },
        cookies: [
          { name: 'cookie-consent', purpose: 'Çerez tercihlerini saklar', type: 'Zorunlu', duration: '1 yıl' },
          { name: '_ga', purpose: 'Google Analytics - site trafiği analizi', type: 'Analitik', duration: '2 yıl' },
          { name: 'language', purpose: 'Dil tercihini saklar', type: 'İşlevsel', duration: '1 yıl' },
        ],
      },
      preferences: {
        title: 'Çerez Tercihleri Nasıl Yönetilir?',
        p1: 'Çerezlerin kullanımına ilişkin tercihlerinizi değiştirmek ya da çerezleri engellemek veya silmek için tarayıcınızın ayarlarını değiştirmeniz yeterlidir.',
        p2: 'Birçok tarayıcı çerezleri kontrol edebilmeniz için size çerezleri kabul etme veya reddetme, yalnızca belirli türdeki çerezleri kabul etme seçeneği sunar.',
        browserTitle: 'Tarayıcı Ayarları',
        note: 'Not: Çerezleri devre dışı bırakır veya reddederseniz, bazı tercihleri manuel olarak ayarlamanız gerekebilir ve internet sitesindeki bazı özellikler düzgün çalışmayabilir.',
      },
      contact: {
        title: 'İletişim',
        description: 'Çerez politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz:',
      },
    },
    lastUpdate: 'Son güncelleme: Aralık 2024',
  },
  en: {
    pageTitle: 'Cookie Policy',
    subtitle: 'Information about cookies used on our website',
    sections: {
      whatIsCookie: {
        title: 'What is a Cookie?',
        description: 'A cookie is a small text file stored on your computer or mobile device when you visit websites through browsers using mobile and desktop devices. They are generally used to provide you with a personalized experience while using the website you visit, to improve the services offered and to enhance your experience.',
      },
      whatFor: {
        title: 'What Are They Used For?',
        description: 'Cookies are used to make websites easier to use and to adjust according to users\' interests and needs. This ensures that the user is recognized and preference settings are remembered.',
      },
      types: {
        title: 'Types of Cookies',
        essential: {
          title: 'Essential/Technical Cookies',
          description: 'These are mandatory cookies for the proper functioning of the website you visit. The purpose of these cookies is to provide the necessary service by ensuring the operation of the site. For example, it allows access to secure sections of the website.',
        },
        analytical: {
          title: 'Analytical Cookies',
          description: 'They collect information about how the website is used, frequency and number of visits. The purpose of using these cookies is to improve performance by improving the way the site works. They do not contain data that can identify visitors.',
        },
        functional: {
          title: 'Functional Cookies',
          description: 'They record the choices made by the visitor on the site and remember them on the next visit. The purpose of these cookies is to provide ease of use for visitors. For example, it remembers your language preference.',
        },
      },
      usedCookies: {
        title: 'Cookies Used on Our Website',
        tableHeaders: {
          cookie: 'Cookie',
          purpose: 'Purpose',
          type: 'Type',
          duration: 'Duration',
        },
        cookies: [
          { name: 'cookie-consent', purpose: 'Stores cookie preferences', type: 'Essential', duration: '1 year' },
          { name: '_ga', purpose: 'Google Analytics - site traffic analysis', type: 'Analytical', duration: '2 years' },
          { name: 'language', purpose: 'Stores language preference', type: 'Functional', duration: '1 year' },
        ],
      },
      preferences: {
        title: 'How to Manage Cookie Preferences?',
        p1: 'To change your cookie preferences or to block or delete cookies, you simply need to change your browser settings.',
        p2: 'Many browsers offer you the option to accept or reject cookies, or to accept only certain types of cookies to control cookies.',
        browserTitle: 'Browser Settings',
        note: 'Note: If you disable or reject cookies, you may need to manually adjust some preferences and some features on the website may not work properly.',
      },
      contact: {
        title: 'Contact',
        description: 'For questions about our cookie policy, you can contact us:',
      },
    },
    lastUpdate: 'Last updated: December 2024',
  },
  ar: {
    pageTitle: 'سياسة ملفات تعريف الارتباط',
    subtitle: 'معلومات حول ملفات تعريف الارتباط المستخدمة على موقعنا',
    sections: {
      whatIsCookie: {
        title: 'ما هو ملف تعريف الارتباط؟',
        description: 'ملف تعريف الارتباط هو ملف نصي صغير يتم تخزينه على جهاز الكمبيوتر أو الجهاز المحمول عند زيارة المواقع الإلكترونية من خلال المتصفحات باستخدام الأجهزة المحمولة والمكتبية. يتم استخدامها بشكل عام لتوفير تجربة مخصصة لك أثناء استخدام الموقع الذي تزوره، ولتحسين الخدمات المقدمة وتعزيز تجربتك.',
      },
      whatFor: {
        title: 'لماذا تُستخدم؟',
        description: 'تُستخدم ملفات تعريف الارتباط لجعل المواقع الإلكترونية أسهل في الاستخدام والتكيف مع اهتمامات واحتياجات المستخدمين. وهذا يضمن التعرف على المستخدم وتذكر إعدادات التفضيلات.',
      },
      types: {
        title: 'أنواع ملفات تعريف الارتباط',
        essential: {
          title: 'ملفات تعريف الارتباط الأساسية/التقنية',
          description: 'هذه ملفات تعريف ارتباط إلزامية للتشغيل السليم للموقع الذي تزوره. الغرض من هذه الملفات هو تقديم الخدمة الضرورية من خلال ضمان تشغيل الموقع. على سبيل المثال، تسمح بالوصول إلى الأقسام الآمنة من الموقع.',
        },
        analytical: {
          title: 'ملفات تعريف الارتباط التحليلية',
          description: 'تجمع معلومات حول كيفية استخدام الموقع وتكرار الزيارات وعددها. الغرض من استخدام هذه الملفات هو تحسين الأداء من خلال تحسين طريقة عمل الموقع. لا تحتوي على بيانات يمكن أن تحدد هوية الزوار.',
        },
        functional: {
          title: 'ملفات تعريف الارتباط الوظيفية',
          description: 'تسجل الخيارات التي يقوم بها الزائر على الموقع وتتذكرها في الزيارة التالية. الغرض من هذه الملفات هو توفير سهولة الاستخدام للزوار. على سبيل المثال، تتذكر تفضيل اللغة الخاص بك.',
        },
      },
      usedCookies: {
        title: 'ملفات تعريف الارتباط المستخدمة على موقعنا',
        tableHeaders: {
          cookie: 'ملف تعريف الارتباط',
          purpose: 'الغرض',
          type: 'النوع',
          duration: 'المدة',
        },
        cookies: [
          { name: 'cookie-consent', purpose: 'يخزن تفضيلات ملفات تعريف الارتباط', type: 'أساسي', duration: 'سنة واحدة' },
          { name: '_ga', purpose: 'Google Analytics - تحليل حركة المرور على الموقع', type: 'تحليلي', duration: 'سنتان' },
          { name: 'language', purpose: 'يخزن تفضيل اللغة', type: 'وظيفي', duration: 'سنة واحدة' },
        ],
      },
      preferences: {
        title: 'كيفية إدارة تفضيلات ملفات تعريف الارتباط؟',
        p1: 'لتغيير تفضيلات ملفات تعريف الارتباط أو حظرها أو حذفها، تحتاج ببساطة إلى تغيير إعدادات المتصفح.',
        p2: 'تقدم لك العديد من المتصفحات خيار قبول أو رفض ملفات تعريف الارتباط، أو قبول أنواع معينة فقط من ملفات تعريف الارتباط للتحكم فيها.',
        browserTitle: 'إعدادات المتصفح',
        note: 'ملاحظة: إذا قمت بتعطيل أو رفض ملفات تعريف الارتباط، فقد تحتاج إلى ضبط بعض التفضيلات يدويًا وقد لا تعمل بعض الميزات على الموقع بشكل صحيح.',
      },
      contact: {
        title: 'اتصل بنا',
        description: 'للأسئلة حول سياسة ملفات تعريف الارتباط الخاصة بنا، يمكنك الاتصال بنا:',
      },
    },
    lastUpdate: 'آخر تحديث: ديسمبر 2024',
  },
  ru: {
    pageTitle: 'Политика использования файлов cookie',
    subtitle: 'Информация о файлах cookie, используемых на нашем веб-сайте',
    sections: {
      whatIsCookie: {
        title: 'Что такое файл cookie?',
        description: 'Cookie — это небольшой текстовый файл, который сохраняется на вашем компьютере или мобильном устройстве при посещении веб-сайтов через браузеры с использованием мобильных и настольных устройств. Обычно они используются для предоставления персонализированного опыта при использовании веб-сайта, улучшения предлагаемых услуг и повышения качества вашего опыта.',
      },
      whatFor: {
        title: 'Для чего они используются?',
        description: 'Файлы cookie используются для упрощения использования веб-сайтов и их адаптации к интересам и потребностям пользователей. Это обеспечивает распознавание пользователя и запоминание настроек предпочтений.',
      },
      types: {
        title: 'Типы файлов cookie',
        essential: {
          title: 'Обязательные/Технические файлы cookie',
          description: 'Это обязательные файлы cookie для правильного функционирования веб-сайта. Цель этих файлов — обеспечить необходимую услугу путём обеспечения работы сайта. Например, они позволяют получить доступ к защищённым разделам веб-сайта.',
        },
        analytical: {
          title: 'Аналитические файлы cookie',
          description: 'Они собирают информацию о том, как используется веб-сайт, частоте и количестве посещений. Цель использования этих файлов — повышение производительности путём улучшения работы сайта. Они не содержат данных, которые могут идентифицировать посетителей.',
        },
        functional: {
          title: 'Функциональные файлы cookie',
          description: 'Они записывают выбор, сделанный посетителем на сайте, и запоминают его при следующем посещении. Цель этих файлов — обеспечить удобство использования для посетителей. Например, они запоминают ваши языковые предпочтения.',
        },
      },
      usedCookies: {
        title: 'Файлы cookie, используемые на нашем веб-сайте',
        tableHeaders: {
          cookie: 'Cookie',
          purpose: 'Цель',
          type: 'Тип',
          duration: 'Срок действия',
        },
        cookies: [
          { name: 'cookie-consent', purpose: 'Сохраняет настройки файлов cookie', type: 'Обязательный', duration: '1 год' },
          { name: '_ga', purpose: 'Google Analytics - анализ трафика сайта', type: 'Аналитический', duration: '2 года' },
          { name: 'language', purpose: 'Сохраняет языковые предпочтения', type: 'Функциональный', duration: '1 год' },
        ],
      },
      preferences: {
        title: 'Как управлять настройками файлов cookie?',
        p1: 'Чтобы изменить настройки файлов cookie или заблокировать или удалить их, вам просто нужно изменить настройки браузера.',
        p2: 'Многие браузеры предлагают вам возможность принять или отклонить файлы cookie или принять только определённые типы файлов cookie для их контроля.',
        browserTitle: 'Настройки браузера',
        note: 'Примечание: Если вы отключите или отклоните файлы cookie, вам может потребоваться вручную настроить некоторые параметры, и некоторые функции на веб-сайте могут работать неправильно.',
      },
      contact: {
        title: 'Контакты',
        description: 'По вопросам о нашей политике использования файлов cookie вы можете связаться с нами:',
      },
    },
    lastUpdate: 'Последнее обновление: декабрь 2024',
  },
}

const browserLinks = [
  { name: 'Google Chrome', url: 'https://support.google.com/chrome/answer/95647' },
  { name: 'Mozilla Firefox', url: 'https://support.mozilla.org/tr/kb/cerezleri-silme-web-sitelerinin-bilgilerini-kaldirma' },
  { name: 'Safari', url: 'https://support.apple.com/tr-tr/guide/safari/sfri11471/mac' },
  { name: 'Microsoft Edge', url: 'https://support.microsoft.com/tr-tr/microsoft-edge/microsoft-edge-de-tanımlama-bilgilerini-silme' },
]

export default async function CookiePolicyPage({ params }: PageProps) {
  const { locale } = await params
  const t = content[locale] || content.tr
  const s = t.sections

  return (
    <div className="min-h-screen bg-steel-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-steel-900 to-steel-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {t.pageTitle}
            </h1>
            <p className="text-steel-300">
              {t.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 md:p-12">
            <div className="prose prose-steel max-w-none">
              
              <h2>{s.whatIsCookie.title}</h2>
              <p>{s.whatIsCookie.description}</p>

              <h2>{s.whatFor.title}</h2>
              <p>{s.whatFor.description}</p>

              <h2>{s.types.title}</h2>
              
              <h3>{s.types.essential.title}</h3>
              <p>{s.types.essential.description}</p>

              <h3>{s.types.analytical.title}</h3>
              <p>{s.types.analytical.description}</p>

              <h3>{s.types.functional.title}</h3>
              <p>{s.types.functional.description}</p>

              <h2>{s.usedCookies.title}</h2>
              
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-steel-100">
                      <th className="text-left p-3">{s.usedCookies.tableHeaders.cookie}</th>
                      <th className="text-left p-3">{s.usedCookies.tableHeaders.purpose}</th>
                      <th className="text-left p-3">{s.usedCookies.tableHeaders.type}</th>
                      <th className="text-left p-3">{s.usedCookies.tableHeaders.duration}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {s.usedCookies.cookies.map((cookie, index) => (
                      <tr key={index}>
                        <td className="p-3 border-b">{cookie.name}</td>
                        <td className="p-3 border-b">{cookie.purpose}</td>
                        <td className="p-3 border-b">{cookie.type}</td>
                        <td className="p-3 border-b">{cookie.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2>{s.preferences.title}</h2>
              <p>{s.preferences.p1}</p>
              <p>{s.preferences.p2}</p>
              
              <h3>{s.preferences.browserTitle}</h3>
              <ul>
                {browserLinks.map((browser) => (
                  <li key={browser.name}>
                    <a href={browser.url} target="_blank" rel="noopener noreferrer">
                      {browser.name}
                    </a>
                  </li>
                ))}
              </ul>

              <p className="bg-steel-100 p-4 rounded-lg">
                <strong>{s.preferences.note.split(':')[0]}:</strong>{s.preferences.note.split(':').slice(1).join(':')}
              </p>

              <h2>{s.contact.title}</h2>
              <p>{s.contact.description}</p>
              <ul>
                <li>E-posta: {siteConfig.contact.email}</li>
                <li>{locale === 'en' ? 'Phone' : 'Telefon'}: {siteConfig.contact.phone}</li>
                <li>{locale === 'en' ? 'Address' : 'Adres'}: {siteConfig.contact.address.full}</li>
              </ul>

              <hr />
              
              <p className="text-sm text-steel-500">
                {t.lastUpdate}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
