import { Metadata } from 'next'
import { generateMetadata as generateSeoMetadata } from '@/lib/seo'
import { siteConfig } from '@/lib/config'
import { getDictionary } from '@/lib/i18n/dictionaries'
import { i18nConfig, Locale } from '@/lib/i18n/config'
import { getDomainUrl, type SupportedLocale } from '@/lib/config/domains'

interface PageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  
  const titles = {
    tr: 'KVKK Aydınlatma Metni',
    en: 'Privacy Policy (KVKK)',
    ar: 'سياسة الخصوصية (KVKK)',
    ru: 'Политика конфиденциальности (KVKK)',
    fr: 'Politique de confidentialité (KVKK)',
  }
  
  const descriptions = {
    tr: 'Alya Tekstil San. ve Tic. Ltd. Şti. 6698 Sayılı Kişisel Verilerin Korunması Kanunu kapsamında aydınlatma metni.',
    en: 'Alya Tekstil San. ve Tic. Ltd. Şti. privacy policy under Personal Data Protection Law No. 6698.',
    ar: 'سياسة خصوصية شركة أليا تكستيل للصناعة والتجارة المحدودة بموجب قانون حماية البيانات الشخصية رقم 6698.',
    ru: 'Политика конфиденциальности компании Alya Tekstil San. ve Tic. Ltd. Şti. в соответствии с Законом о защите персональных данных № 6698.',
    fr: 'Politique de confidentialité de Alya Tekstil San. ve Tic. Ltd. Şti. conformément à la loi sur la protection des données personnelles n° 6698.',
  }
  
  return generateSeoMetadata({
    title: titles[locale] || titles.tr,
    description: descriptions[locale] || descriptions.tr,
    url: `${getDomainUrl(locale as SupportedLocale)}/${locale}/privacy-policy`,
  })
}

// İçerik objeleri - dil bazlı
const content = {
  tr: {
    pageTitle: 'KVKK Aydınlatma Metni',
    subtitle: '6698 Sayılı Kişisel Verilerin Korunması Kanunu Kapsamında',
    sections: {
      info: {
        title: 'Bilgilendirme',
        p1: '6698 Sayılı Kişisel Verilerin Korunması Kanunu 24 Mart 2016 tarihinde kabul edilmiş olup, 7 Nisan 2016 tarihinde Resmi Gazete\'de yayımlanarak yürürlüğe girmiştir.',
        p2: 'Kanun; Kişisel verilerin işlenmesinde başta özel hayatın gizliliği olmak üzere kişilerin temel hak ve özgürlüklerini korumak ve kişisel verileri işleyen gerçek ve tüzel kişilerin yükümlülükleri ile uyacakları usul ve esasları düzenlemek amacıyla kabul edilmiştir. İşbu metin ile şirket tarafından ziyaretçiler bilgilendirilmekte ve aydınlatılmaktadır.',
        p3: 'Şirket, ziyaretçiler tarafından bu sitedeki formlar aracılığıyla sunulan isminiz, elektronik posta adresiniz, iş ve ev adresiniz, telefon numaranız ve sair kişisel verilerinizi yalnızca işleme amacı ile sınırlı olarak ve aydınlatma metninde, onay verilmiş ise açık rıza metninde belirtilen sınırlar çerçevesinde işleyecektir.',
      },
      dataController: {
        title: 'Veri Sorumlusu ve İrtibat Kişisi',
        description: 'İşbu Aydınlatma Metninde ifade edilmiş olduğu üzere ŞİRKET, KVKK gereğince veri sorumlusudur.',
        infoTitle: 'Veri Sorumlusu Bilgisi',
        labels: {
          fullName: 'Açık Adı',
          shortName: 'Kısa Adı',
          address: 'Adres',
          website: 'İnternet Sitesi',
          kepAddress: 'KEP Adresi',
        },
        shortNameValue: 'ŞİRKET',
      },
      processingReasons: {
        title: 'Verilerinizi İşleme Nedenlerimiz',
        description: 'Kişisel verileriniz, şirketimiz tarafından sağlanan ürün ve hizmetlerin tarafınıza sunulabilmesini temin için şirket içerisinde gerekli faaliyetlerin yürütülmesi, siz müşterilerimizin güncel ihtiyaçlarınıza uygun ürün ve hizmetlerin önerilebilmesi için gerekli çalışmaların ilgili iş birimi ve iş ortakları ile yapılması, insan kaynağı yönetiminin Şirketimiz tarafından sağlanarak gerçek kişilerin haklarının temini, Şirketimiz tarafından ticari kararların verilmesi, uygulanması ve gerçekleştirilmesi konusunda gerekli adımların atılması, iş ilişkisi kurduğumuz gerçek kişilerin ve Şirketimizin bu ilişkilerden kaynaklı hukuki emniyetinin sağlanması ve bunlarla sınırlı olmamak kaydıyla benzer amaçlarla Kanun\'un 5 ve 6. maddeleri uyarınca işlenmektedir.',
        purposesTitle: 'Kişisel verileriniz aşağıdaki amaçlarla işlenebilecektir:',
        purposes: [
          'İşin bir parçası olarak sizinle ve başkalarıyla iletişim kurmak',
          'Size hizmet şartlarımızdaki değişiklikler hakkında bilgi göndermek',
          'Kalite, eğitim ve güvenlik iyileştirmesi sağlamak',
          'Şikâyetleri çözmek ve veri erişim taleplerini işleme almak',
          'Altyapımızı ve ticari faaliyetlerimizi yönetmek',
        ],
      },
      processedData: {
        title: 'İşlediğimiz Kişisel Verileriniz',
        identity: {
          title: 'Kimlik Bilgileri',
          description: 'İsminiz, soy isminiz, T.C. kimlik numaranız ve Şirket tarafından açık rızanız dahilinde temin edilen sair bilgiler.',
        },
        contact: {
          title: 'İletişim Bilgileri',
          description: 'İkamet adresiniz, işyeri adresiniz, telefon numaranız ve e-posta adresiniz.',
        },
      },
      rights: {
        title: 'İlgili Kişinin KVKK\'nın 11. Maddesinde Sayılan Hakları',
        description: 'Kişisel veri sahipleri olarak aşağıdaki haklara sahipsiniz:',
        list: [
          'Kişisel veri işlenip işlenmediğini öğrenme',
          'Kişisel verileri işlenmişse buna ilişkin bilgi talep etme',
          'Kişisel verilerin işlenme amacını öğrenme',
          'Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme',
          'Eksik veya yanlış işlenmiş olması hâlinde düzeltilmesini isteme',
          'İşlenmesini gerektiren sebeplerin ortadan kalkması hâlinde silinmesini isteme',
          'Kanuna aykırı işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme',
        ],
      },
      howToUseRights: {
        title: 'Haklarınızı Nasıl Kullanabilirsiniz?',
        description: 'Talebinizi {email} adresi üzerinden tarafımıza iletebilir veya formu fiziki olarak doldurarak {address} adresine kargo/posta vasıtasıyla gönderebilirsiniz.',
        response: 'Talebiniz en geç 30 gün içinde değerlendirilecek ve tarafınıza konuyla ilgili bilgi verilecektir.',
      },
    },
    lastUpdate: 'Son güncelleme: Aralık 2024',
  },
  en: {
    pageTitle: 'Privacy Policy (KVKK)',
    subtitle: 'Under Personal Data Protection Law No. 6698',
    sections: {
      info: {
        title: 'Information',
        p1: 'Personal Data Protection Law No. 6698 was adopted on March 24, 2016 and entered into force after being published in the Official Gazette on April 7, 2016.',
        p2: 'The Law was adopted to protect the fundamental rights and freedoms of individuals, especially the privacy of private life, in the processing of personal data, and to regulate the obligations of real and legal persons who process personal data and the procedures and principles to be followed. With this text, visitors are informed and enlightened by the company.',
        p3: 'The Company will process your name, email address, business and home address, phone number and other personal data submitted through the forms on this site only within the scope of the processing purpose and within the limits specified in the clarification text, and if consent is given, in the explicit consent text.',
      },
      dataController: {
        title: 'Data Controller and Contact Person',
        description: 'As stated in this Clarification Text, the COMPANY is the data controller in accordance with KVKK.',
        infoTitle: 'Data Controller Information',
        labels: {
          fullName: 'Full Name',
          shortName: 'Short Name',
          address: 'Address',
          website: 'Website',
          kepAddress: 'KEP Address',
        },
        shortNameValue: 'COMPANY',
      },
      processingReasons: {
        title: 'Reasons for Processing Your Data',
        description: 'Your personal data is processed in accordance with Articles 5 and 6 of the Law for purposes including but not limited to: carrying out necessary activities within the company to provide products and services, working with relevant business units and partners to recommend products and services suitable for your current needs, ensuring human resource management by our Company, taking necessary steps for commercial decisions, and ensuring legal security of individuals and our Company arising from business relationships.',
        purposesTitle: 'Your personal data may be processed for the following purposes:',
        purposes: [
          'Communicating with you and others as part of business',
          'Sending you information about changes to our service terms',
          'Providing quality, training and security improvements',
          'Resolving complaints and processing data access requests',
          'Managing our infrastructure and commercial activities',
        ],
      },
      processedData: {
        title: 'Personal Data We Process',
        identity: {
          title: 'Identity Information',
          description: 'Your name, surname, Turkish ID number and other information obtained with your explicit consent by the Company.',
        },
        contact: {
          title: 'Contact Information',
          description: 'Your residence address, business address, phone number and email address.',
        },
      },
      rights: {
        title: 'Rights Listed in Article 11 of KVKK',
        description: 'As personal data owners, you have the following rights:',
        list: [
          'Learning whether personal data is being processed',
          'Requesting information if personal data has been processed',
          'Learning the purpose of processing personal data',
          'Knowing third parties to whom data is transferred domestically or abroad',
          'Requesting correction if data is incomplete or incorrectly processed',
          'Requesting deletion when reasons requiring processing cease to exist',
          'Claiming compensation if damage is suffered due to unlawful processing',
        ],
      },
      howToUseRights: {
        title: 'How Can You Exercise Your Rights?',
        description: 'You can submit your request to us via {email} or physically fill out the form and send it to {address} by cargo/post.',
        response: 'Your request will be evaluated within 30 days at the latest and you will be informed about the matter.',
      },
    },
    lastUpdate: 'Last updated: December 2024',
  },
  ar: {
    pageTitle: 'سياسة الخصوصية (KVKK)',
    subtitle: 'بموجب قانون حماية البيانات الشخصية رقم 6698',
    sections: {
      info: {
        title: 'معلومات',
        p1: 'تم اعتماد قانون حماية البيانات الشخصية رقم 6698 في 24 مارس 2016 ودخل حيز التنفيذ بعد نشره في الجريدة الرسمية في 7 أبريل 2016.',
        p2: 'تم اعتماد القانون لحماية الحقوق والحريات الأساسية للأفراد، وخاصة خصوصية الحياة الخاصة، في معالجة البيانات الشخصية، ولتنظيم التزامات الأشخاص الطبيعيين والاعتباريين الذين يعالجون البيانات الشخصية والإجراءات والمبادئ الواجب اتباعها. بهذا النص، يتم إعلام الزوار وتنويرهم من قبل الشركة.',
        p3: 'ستقوم الشركة بمعالجة اسمك وعنوان بريدك الإلكتروني وعنوان العمل والمنزل ورقم الهاتف والبيانات الشخصية الأخرى المقدمة من خلال النماذج على هذا الموقع فقط في نطاق غرض المعالجة وضمن الحدود المحددة في نص التوضيح، وإذا تم منح الموافقة، في نص الموافقة الصريحة.',
      },
      dataController: {
        title: 'مسؤول البيانات وجهة الاتصال',
        description: 'كما هو مذكور في نص التوضيح هذا، الشركة هي مسؤول البيانات وفقًا لـ KVKK.',
        infoTitle: 'معلومات مسؤول البيانات',
        labels: {
          fullName: 'الاسم الكامل',
          shortName: 'الاسم المختصر',
          address: 'العنوان',
          website: 'الموقع الإلكتروني',
          kepAddress: 'عنوان KEP',
        },
        shortNameValue: 'الشركة',
      },
      processingReasons: {
        title: 'أسباب معالجة بياناتك',
        description: 'تتم معالجة بياناتك الشخصية وفقًا للمادتين 5 و6 من القانون لأغراض تشمل على سبيل المثال لا الحصر: تنفيذ الأنشطة الضرورية داخل الشركة لتقديم المنتجات والخدمات، والعمل مع وحدات الأعمال والشركاء ذوي الصلة للتوصية بالمنتجات والخدمات المناسبة لاحتياجاتك الحالية، وضمان إدارة الموارد البشرية من قبل شركتنا، واتخاذ الخطوات اللازمة للقرارات التجارية، وضمان الأمان القانوني للأفراد وشركتنا الناشئ عن العلاقات التجارية.',
        purposesTitle: 'قد تتم معالجة بياناتك الشخصية للأغراض التالية:',
        purposes: [
          'التواصل معك ومع الآخرين كجزء من العمل',
          'إرسال معلومات حول التغييرات في شروط الخدمة',
          'توفير تحسينات الجودة والتدريب والأمان',
          'حل الشكاوى ومعالجة طلبات الوصول إلى البيانات',
          'إدارة البنية التحتية والأنشطة التجارية',
        ],
      },
      processedData: {
        title: 'البيانات الشخصية التي نعالجها',
        identity: {
          title: 'معلومات الهوية',
          description: 'اسمك ولقبك ورقم الهوية التركية والمعلومات الأخرى التي تم الحصول عليها بموافقتك الصريحة من قبل الشركة.',
        },
        contact: {
          title: 'معلومات الاتصال',
          description: 'عنوان إقامتك وعنوان عملك ورقم هاتفك وعنوان بريدك الإلكتروني.',
        },
      },
      rights: {
        title: 'الحقوق المذكورة في المادة 11 من KVKK',
        description: 'بصفتكم أصحاب البيانات الشخصية، لديكم الحقوق التالية:',
        list: [
          'معرفة ما إذا كانت البيانات الشخصية قيد المعالجة',
          'طلب معلومات إذا تمت معالجة البيانات الشخصية',
          'معرفة الغرض من معالجة البيانات الشخصية',
          'معرفة الأطراف الثالثة التي يتم نقل البيانات إليها محليًا أو دوليًا',
          'طلب التصحيح إذا كانت البيانات غير كاملة أو تمت معالجتها بشكل غير صحيح',
          'طلب الحذف عندما تنتهي الأسباب التي تتطلب المعالجة',
          'المطالبة بالتعويض في حالة حدوث ضرر بسبب المعالجة غير القانونية',
        ],
      },
      howToUseRights: {
        title: 'كيف يمكنك ممارسة حقوقك؟',
        description: 'يمكنك تقديم طلبك إلينا عبر {email} أو ملء النموذج فعليًا وإرساله إلى {address} عن طريق البريد السريع/البريد.',
        response: 'سيتم تقييم طلبك خلال 30 يومًا على الأكثر وسيتم إعلامك بالموضوع.',
      },
    },
    lastUpdate: 'آخر تحديث: ديسمبر 2024',
  },
  ru: {
    pageTitle: 'Политика конфиденциальности (KVKK)',
    subtitle: 'В соответствии с Законом о защите персональных данных № 6698',
    sections: {
      info: {
        title: 'Информация',
        p1: 'Закон о защите персональных данных № 6698 был принят 24 марта 2016 года и вступил в силу после публикации в Официальной газете 7 апреля 2016 года.',
        p2: 'Закон был принят для защиты основных прав и свобод личности, особенно неприкосновенности частной жизни, при обработке персональных данных, а также для регулирования обязанностей физических и юридических лиц, обрабатывающих персональные данные, и процедур и принципов, которым необходимо следовать. Настоящим текстом компания информирует и разъясняет посетителям.',
        p3: 'Компания будет обрабатывать ваше имя, адрес электронной почты, рабочий и домашний адрес, номер телефона и другие персональные данные, предоставленные через формы на этом сайте, только в рамках цели обработки и в пределах, указанных в тексте разъяснения, а при наличии согласия — в тексте явного согласия.',
      },
      dataController: {
        title: 'Оператор данных и контактное лицо',
        description: 'Как указано в настоящем тексте разъяснения, КОМПАНИЯ является оператором данных в соответствии с KVKK.',
        infoTitle: 'Информация об операторе данных',
        labels: {
          fullName: 'Полное наименование',
          shortName: 'Краткое наименование',
          address: 'Адрес',
          website: 'Веб-сайт',
          kepAddress: 'Адрес KEP',
        },
        shortNameValue: 'КОМПАНИЯ',
      },
      processingReasons: {
        title: 'Причины обработки ваших данных',
        description: 'Ваши персональные данные обрабатываются в соответствии со статьями 5 и 6 Закона для целей, включая, но не ограничиваясь: осуществление необходимой деятельности внутри компании для предоставления продуктов и услуг, работа с соответствующими бизнес-подразделениями и партнёрами для рекомендации продуктов и услуг, соответствующих вашим текущим потребностям, обеспечение управления человеческими ресурсами нашей Компанией, принятие необходимых шагов для коммерческих решений и обеспечение правовой безопасности физических лиц и нашей Компании, возникающей из деловых отношений.',
        purposesTitle: 'Ваши персональные данные могут обрабатываться для следующих целей:',
        purposes: [
          'Общение с вами и другими лицами в рамках бизнеса',
          'Отправка информации об изменениях в условиях обслуживания',
          'Обеспечение улучшений качества, обучения и безопасности',
          'Разрешение жалоб и обработка запросов на доступ к данным',
          'Управление нашей инфраструктурой и коммерческой деятельностью',
        ],
      },
      processedData: {
        title: 'Персональные данные, которые мы обрабатываем',
        identity: {
          title: 'Идентификационная информация',
          description: 'Ваше имя, фамилия, идентификационный номер гражданина Турции и другая информация, полученная с вашего явного согласия Компанией.',
        },
        contact: {
          title: 'Контактная информация',
          description: 'Ваш адрес проживания, рабочий адрес, номер телефона и адрес электронной почты.',
        },
      },
      rights: {
        title: 'Права, перечисленные в статье 11 KVKK',
        description: 'Как владельцы персональных данных, вы имеете следующие права:',
        list: [
          'Узнать, обрабатываются ли персональные данные',
          'Запросить информацию, если персональные данные были обработаны',
          'Узнать цель обработки персональных данных',
          'Знать третьих лиц, которым данные передаются внутри страны или за рубежом',
          'Запросить исправление, если данные неполны или обработаны неправильно',
          'Запросить удаление, когда причины, требующие обработки, перестают существовать',
          'Требовать компенсацию в случае ущерба, причинённого незаконной обработкой',
        ],
      },
      howToUseRights: {
        title: 'Как вы можете реализовать свои права?',
        description: 'Вы можете отправить свой запрос нам по адресу {email} или физически заполнить форму и отправить её на адрес {address} курьером/почтой.',
        response: 'Ваш запрос будет рассмотрен в течение максимум 30 дней, и вы будете проинформированы по данному вопросу.',
      },
    },
    lastUpdate: 'Последнее обновление: декабрь 2024',
  },
  fr: {
    pageTitle: 'Politique de confidentialité (KVKK)',
    subtitle: 'En vertu de la loi n° 6698 sur la protection des données personnelles',
    sections: {
      info: {
        title: 'Information',
        p1: 'La loi n° 6698 sur la protection des données personnelles a été adoptée le 24 mars 2016 et est entrée en vigueur après sa publication au Journal officiel le 7 avril 2016.',
        p2: 'La loi a été adoptée pour protéger les droits et libertés fondamentaux des personnes, en particulier la vie privée, lors du traitement des données personnelles, et pour réglementer les obligations des personnes physiques et morales qui traitent les données personnelles ainsi que les procédures et principes à suivre. Par ce texte, les visiteurs sont informés et éclairés par la société.',
        p3: 'La Société traitera votre nom, adresse e-mail, adresse professionnelle et domicile, numéro de téléphone et autres données personnelles soumises via les formulaires sur ce site uniquement dans le cadre de l\'objectif de traitement et dans les limites spécifiées dans le texte de clarification, et si le consentement est donné, dans le texte de consentement explicite.',
      },
      dataController: {
        title: 'Responsable du traitement et personne de contact',
        description: 'Comme indiqué dans ce texte de clarification, la SOCIÉTÉ est le responsable du traitement conformément au KVKK.',
        infoTitle: 'Informations sur le responsable du traitement',
        labels: {
          fullName: 'Nom complet',
          shortName: 'Nom court',
          address: 'Adresse',
          website: 'Site Web',
          kepAddress: 'Adresse KEP',
        },
        shortNameValue: 'SOCIÉTÉ',
      },
      processingReasons: {
        title: 'Raisons du traitement de vos données',
        description: 'Vos données personnelles sont traitées conformément aux articles 5 et 6 de la loi à des fins incluant, mais sans s\'y limiter : la réalisation des activités nécessaires au sein de l\'entreprise pour fournir des produits et services, le travail avec les unités commerciales et partenaires concernés pour recommander des produits et services adaptés à vos besoins actuels, la garantie de la gestion des ressources humaines par notre Société, la prise des mesures nécessaires pour les décisions commerciales et la garantie de la sécurité juridique des personnes et de notre Société découlant des relations commerciales.',
        purposesTitle: 'Vos données personnelles peuvent être traitées aux fins suivantes :',
        purposes: [
          'Communiquer avec vous et d\'autres dans le cadre des affaires',
          'Vous envoyer des informations sur les modifications de nos conditions de service',
          'Fournir des améliorations de qualité, de formation et de sécurité',
          'Résoudre les plaintes et traiter les demandes d\'accès aux données',
          'Gérer notre infrastructure et nos activités commerciales',
        ],
      },
      processedData: {
        title: 'Données personnelles que nous traitons',
        identity: {
          title: 'Informations d\'identité',
          description: 'Votre nom, prénom, numéro d\'identité turc et autres informations obtenues avec votre consentement explicite par la Société.',
        },
        contact: {
          title: 'Informations de contact',
          description: 'Votre adresse de résidence, adresse professionnelle, numéro de téléphone et adresse e-mail.',
        },
      },
      rights: {
        title: 'Droits énumérés à l\'article 11 du KVKK',
        description: 'En tant que propriétaires de données personnelles, vous avez les droits suivants :',
        list: [
          'Savoir si les données personnelles sont traitées',
          'Demander des informations si les données personnelles ont été traitées',
          'Connaître le but du traitement des données personnelles',
          'Connaître les tiers auxquels les données sont transférées au niveau national ou à l\'étranger',
          'Demander une correction si les données sont incomplètes ou traitées de manière incorrecte',
          'Demander la suppression lorsque les raisons nécessitant le traitement cessent d\'exister',
          'Réclamer une indemnisation en cas de dommage subi en raison d\'un traitement illégal',
        ],
      },
      howToUseRights: {
        title: 'Comment exercer vos droits ?',
        description: 'Vous pouvez nous soumettre votre demande via {email} ou remplir physiquement le formulaire et l\'envoyer à {address} par coursier/poste.',
        response: 'Votre demande sera évaluée dans un délai maximum de 30 jours et vous serez informé de la question.',
      },
    },
    lastUpdate: 'Dernière mise à jour : décembre 2024',
  },
}

export default async function KVKKPage({ params }: PageProps) {
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
              
              <h2>{s.info.title}</h2>
              <p>{s.info.p1}</p>
              <p>{s.info.p2}</p>
              <p>{s.info.p3}</p>

              <h2>{s.dataController.title}</h2>
              <p>{s.dataController.description}</p>
              
              <h3>{s.dataController.infoTitle}</h3>
              <table className="min-w-full">
                <tbody>
                  <tr>
                    <td className="font-semibold">{s.dataController.labels.fullName}:</td>
                    <td>{siteConfig.company.legalName}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">{s.dataController.labels.shortName}:</td>
                    <td>{s.dataController.shortNameValue}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">{s.dataController.labels.address}:</td>
                    <td>{siteConfig.contact.address.full}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold">{s.dataController.labels.website}:</td>
                    <td>
                      <a href={siteConfig.mainSiteUrl} target="_blank" rel="noopener noreferrer">
                        {siteConfig.mainSiteUrl}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-semibold">{s.dataController.labels.kepAddress}:</td>
                    <td>alyatekstilsanayi@hs01.kep.tr</td>
                  </tr>
                </tbody>
              </table>

              <h2>{s.processingReasons.title}</h2>
              <p>{s.processingReasons.description}</p>

              <h3>{s.processingReasons.purposesTitle}</h3>
              <ul>
                {s.processingReasons.purposes.map((purpose, index) => (
                  <li key={index}>{purpose}</li>
                ))}
              </ul>

              <h2>{s.processedData.title}</h2>
              <h3>{s.processedData.identity.title}</h3>
              <p>{s.processedData.identity.description}</p>
              <h3>{s.processedData.contact.title}</h3>
              <p>{s.processedData.contact.description}</p>

              <h2>{s.rights.title}</h2>
              <p>{s.rights.description}</p>
              <ul>
                {s.rights.list.map((right, index) => (
                  <li key={index}>{right}</li>
                ))}
              </ul>

              <h2>{s.howToUseRights.title}</h2>
              <p>
                {s.howToUseRights.description
                  .replace('{email}', siteConfig.contact.email)
                  .replace('{address}', siteConfig.contact.address.full)}
              </p>
              <p>{s.howToUseRights.response}</p>

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
