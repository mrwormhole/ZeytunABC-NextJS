
import Head from 'next/head'
import React from "react";
import Footer from '../components/footer';
import Navigation from '../components/navigation';
import FloatingActionButton from '../components/floatingActionButton';
import Link from 'next/link';
import { useCookies } from "react-cookie";

export default function AnnouncementPage() {
    const [cookies] = useCookies(["language"]);
    const currentLanguage = cookies["language"];

    if (currentLanguage == "turkish") {
        return (
            <React.Fragment>

                <Head>
                    <meta name="title" content="Zeytun ABC London" />
                    <meta name="description" content="Zeytun ABC LTD is a company established in London. We offer wide range of accountancy, taxation and consultancy services with highest reliablity and the most convenient costs. This is the official site of Zeytun ABC London." />
                    <meta name="keywords" content="zeytun abc, accounting, london, zeytun abc london, zeytun abc accounting, software london, mehmet, altun, mehmet altun, zeyneb altun, accountancy, accountancy service, taxation service, consultancy service, accountancy taxation consultancy london, london accountant, accountancy agency, accounting for convenient cost, reliable accountant" />
                    <meta name="robots" content="index, follow" />
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta name="language" content="English" />
                    <meta name="author" content="Goldenhand Software London" />
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Zeytun Accounting</title>


                    <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
                    <link rel="manifest" href="site.webmanifest" />
                </Head>

                <Navigation onPage="announcement" />
                <main>
                    <section className="hero is-primary has-background-pattern services-hero" id="announcement">
                        <div className="hero-body">
                            <div className="container">
                                <h1 className="title has-text-centered">
                                    Genel Duyuru
                                </h1>
                            </div>
                            <p className="announcement-content mt-2 mx-5">
                                Değerli müşterimiz,
                                <br /><br />
                                1) İngiltere'de kişisel gelir vergi mükelleflerinin gelir vergisi beyanname ve vergi ödemesi süresi için son gün, 31 Ocak’tır. Bu durum, İngiltere'deki bütün şahıs işletmeleri (Sole Trader) ve gelir vergisi mükellefleri (tax resident) için geçerlidir.
                                Henüz vergi ödemesini yapmayanların 31 Ocak 2027’ten önce vergi ödemelerini tamamlamaları gerekmektedir. Vergi beyannamesi hazır olmayanların ise bizle irtibata geçerek 06/04/2025 ile 05/04/2026 tarihleri arasındaki bütün gelirlerini bize iletmeleri gerekmektedir. Bu gelirlere İngiltere dışında bu dönemde kazanılmış olup İngiltere’ye getirilmiş olan gelirler de dahildir. Bizim ilgilendiğimiz İngiltere’deki şirketinizden elde ettiğiniz maaş bilgisi, bizde bulunmaktadır. Bunun dışındaki gelirlerinizi bize iletmeniz gerekmektedir.
                                <br /><br />
                                2) Her bir şirket için ise, kuruluş tarihi dikkate alınarak hesap dönemleri farklılık göstermekle birlikte, şirket vergi beyanı ve ödeme süresi, hesap kesim tarihini müteakip en fazla 9 aydır. Bu kapsamda lütfen şirket hesaplarınızı tam ve doğru bir şekilde yapabilmemiz için sizle paylaştığımız Google Drive klasörüne csv formatındaki banka dökümünüz, nakit hareketler listesi ile alış ve satış faturalarınızı yükleme işlemini geciktirmeyiniz.
                                Şirketlerin ayrıca yıllık güncel durum beyanını ifade eden Confirmation Statement işlem zorunluluğu vardır. Bunun için de zamanı geldikçe bilgilendirme yapmaya devam ediyoruz.
                                Bu tarihleri <a href="https://find-and-update.company-information.service.gov.uk/" target="_blank"><span>bu link</span></a> üzerinden şirket adınızı girerek kontrol edebilirsiniz.
                                <br /><br />
                                3) PAYE (işveren) kaydı olan işletmeler, gönderdiğimiz bordrodaki NET tutarı dikkate alarak maaş ödemesinde bulunmalıdır. HMRC’ye yapılması gereken ödemeleri de düzenli olarak ödemek gerekmektedir. Bunun için her ayın sonunda veya aşağıdaki bilgilere göre ödediğinizde gecikme işlemeyecektir:
                                <ul>
                                    <li className='mx-5'>○ Maaş dönemi: Ekim, Kasım, Aralık ayları için son ödeme tarihi: 22 Ocak </li>
                                    <li className='mx-5'>○ Maaş dönemi: Ocak, Şubat, Mart ayları için son ödeme tarihi: 22 Nisan </li>
                                    <li className='mx-5'>○ Maaş dönemi:Nisan, Mayıs, Haziran ayları için son ödeme tarihi: 22 Temmuz </li>
                                    <li className='mx-5'>○ Maaş dönemi: Temmuz, Ağustos, Eylül ayları için son ödeme tarihi: 22 Ekim</li>
                                </ul>
                                <br />
                                4) Şahıs işletmeleri veya şirketlerde birbirini takip eden son 12 aylık dönemde KDV'ye tabi olabilecek £90.000 tutarında gelire/ciroya ulaşılması durumunda KDV/VAT kaydı zorunlu hale gelmektedir. Dolayısıyla kontrollerinizi yaparak satış hacminizin bu seviyelere yaklaşması durumunda ilgili kayıtlar için ivedilikle bizle irtibata geçmenizi rica ederiz.
                                VAT kayıtlı işletmelerde, VAT beyannamesi ve vergi ödemesi dönemleri farklılık gösterse bile bu işlemler için bütün işletmelerin ilgili dönem sonunu müteakip en fazla 1 ay 7 gün süresi  bulunmaktadır.
                                <br /><br />
                                5) Hesaplarınızı zamanında yapabilmemiz için ortak paylaşımda bulunan Google Drive klasörü üzerinden alış-satış faturaları, banka dökümleri ve nakit hareketlerini yansıtan belgeleri düzenli ve zamanında yüklemenizi rica ediyoruz. Geciken bilgi ve belgelerden dolayı sorumluluk bize ait değildir.
                                <br /><br />
                                6) Şirket sahipleri, yetkili kişileri ve direktörleri ile ilgili adres veya kimlik belgesi değişikliği olması durumunda en geç 10 gün içinde bize yeni belgeyle haber verilmesi gerekmektedir. Biz de bu doğrultuda, HMRC ve Companies House’ta gerekli değişiklikleri ayrıca yapmaktayız.
                                <br /><br />
                                7) İşletmenizin ihtiyacına göre yıllık olarak 3. Taraflarla olan ilişkileri (Sigorta şirketi, ICO kaydı, web hizmeti sunan firma, vb) doğrudan işletme sahibi sorumluluğundadır. Bu tür kurumlarla doğrudan görüşerek işletmenizle ilgili gerekleri kontrol etmenizi hatırlatırız.
                                <br /><br />
                                8) Halihazırda her bir müşterimizin özel durumuna göre bir fiyat üzerinde anlaşmamız devam etmekle birlikte standart hizmet talepleri için fiyatlarımız şu şekildedir:
                                <ul>
                                    <li className='mx-5'>○ Şirket kurulumu: £250</li>
                                    <li className='mx-5'>○ Baz nitelikte adres hizmeti: £250</li>
                                    <li className='mx-5'>○ VAT'li işletme muhasebesi: £1.800</li>
                                    <li className='mx-5'>○ VAT'siz Şirket Muhasebesi: £1.200</li>
                                    <li className='mx-5'>○ Sole Trader Muhasebe Hizmetleri: £1.000</li>
                                    <li className='mx-5'>○ Şirket kapanışı ve/veya Dormant Company Hesapları: £500</li>
                                    <li className='mx-5'>○ Interim Company Accounts: £700</li>
                                </ul>
                                <br />
                                Bu fiyatlara ön muhasebe hizmetleri, yönetim muhasebesi, ekstra bordro hizmetleri, özel görüşme ve acil cevap talepleri gibi hizmetler ile devletin aldığı ücretler ve VAT dahil değildir. Dönemi içinde servis değişiklik talebi bulunanlara göre de revize fiyat uygulanacaktır. Bu fiyatlar enflasyon koşullarına göre yeni dönemde karşılıklı anlaşma doğrultusunda değişebilecektir.
                                <br /><br />
                                İşlerine yeni başlayan müşterilerimiz için bu zamana kadar borç erteleme imkanı sunmaya çalıştık, çalışmaya devam ediyoruz. Ancak, 01 Ocak 2025'ten itibaren aylık düzende ödeme talep etmekteyiz. Bugüne kadar borcunu tamamlamayan müşterilerimizin Aralık sonuna kadar ödemelerini tamamlamalarını rica ediyoruz. Aksi takdirde, üzülerek ifade ederek ödemesini düzenli yapmayan müşterilerimiz için hizmetlerimizi devam ettiremeyeceğimizi bildirmek durumundayız. Lütfen borç bilginiz hakkında bizle irtibata geçiniz.
                                <br /><br />
                                Düzenli ödemede bulunan ve borcunu takip eden müşterilerimize teşekkür ederiz.
                                <br /><br />
                                <span>Saygılar,
                                    <br />
                                    Zeytun ABC Ltd</span>
                            </p>
                        </div>
                    </section>
                </main>
                <FloatingActionButton />
                <Footer />

            </React.Fragment>
        );
    }

    return (
        <React.Fragment>

            <Head>
                <meta name="title" content="Zeytun ABC London" />
                <meta name="description" content="Zeytun ABC LTD is a company established in London. We offer wide range of accountancy, taxation and consultancy services with highest reliablity and the most convenient costs. This is the official site of Zeytun ABC London." />
                <meta name="keywords" content="zeytun abc, accounting, london, zeytun abc london, zeytun abc accounting, software london, mehmet, altun, mehmet altun, zeyneb altun, accountancy, accountancy service, taxation service, consultancy service, accountancy taxation consultancy london, london accountant, accountancy agency, accounting for convenient cost, reliable accountant" />
                <meta name="robots" content="index, follow" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <meta name="author" content="Goldenhand Software London" />
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Zeytun Accounting</title>


                <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
                <link rel="manifest" href="site.webmanifest" />
            </Head>

            <Navigation onPage="announcement" />
            <main>
                <section className="hero is-primary has-background-pattern services-hero" id="announcement">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title has-text-centered">
                                General Announcement
                            </h1>
                        </div>
                        <p className="announcement-content mt-2 mx-5">
                            Dear Sir/Madam,
                            <br /><br />
                            Please be aware of the following important information to fulfill your obligations:
                            <br /><br />
                            1) The last day for personal income taxpayers in the UK to file their income tax returns and pay their
                            taxes is January 31. This applies to all sole traders and tax residents in the UK. Those who have not
                            yet made their tax payments must complete their tax payments before January 31, 2027.
                            <br /><br />
                            Those who do not have their tax returns ready must contact us and send us all their income between
                            06/04/2025 and 05/04/2026. This income includes income earned outside the UK during this period
                            and brought to the UK. We have the salary information you received from your company in the UK
                            that we are interested in. You must send us any other income.
                            <br /><br />
                            2) For each company, the accounting periods vary by taking into account the establishment date, but
                            the company tax declaration and payment period is a maximum of 9 months following the account
                            closing date. In this context, please do not delay uploading your bank statement in CSV or Excel
                            format, cash movement list, and purchase and sales invoices to the Google Drive folder we shared
                            with you so that we can make your company accounts completely and correctly.
                            <br /><br />
                            Companies also have a Confirmation Statement filing requirement, which is for current status
                            declaration. We continue to provide information about this when required.
                            <br /><br />
                            Please check these dates by entering your company name via <a href="https://find-and-update.company-information.service.gov.uk/" target="_blank"><span>this link</span></a>.
                            <br /><br />
                            3) Businesses with a PAYE (employer) record must make salary payments by taking into account the
                            NET amount in the payslip we send. It is also necessary to pay the payments to HMRC regularly. For
                            this, there will be no delay when you pay at the end of each month or according to the information
                            below:
                            <ul>
                                <li className='mx-5'>○ Salary period: Deadline for October, November, December: January 22 </li>
                                <li className='mx-5'>○ Salary period: Last payment date for January, February, March: April 22 </li>
                                <li className='mx-5'>○ Salary period: Last payment date for April, May, June: July 22 </li>
                                <li className='mx-5'>○  Salary period: Last payment date for July, August, September: October 22</li>
                            </ul>
                            <br />
                            4) If a sole proprietorship or company reaches an income/turnover of £90,000 that may be subject to
                            VAT in the last 12 consecutive months, VAT registration becomes mandatory. Therefore, we kindly ask
                            you to contact us urgently for the relevant records after checking your sales volume if your sales
                            volume approaches these levels. Although VAT declaration and tax payment periods may differ for
                            VAT-registered businesses, all businesses have a maximum of 1 month and 7 days following the end
                            of the relevant period for these transactions.
                            <br /><br />
                            5) In order to make your calculations on time, we kindly ask you to upload your purchase and sales
                            invoices, bank statements, and documents reflecting cash movements regularly and on time via the
                            shared Google Drive folder. We are not responsible for delayed information and documents.
                            <br /><br />
                            6) In case of any change in the address or identity document of the company owners, authorized
                            persons, and directors, you have to notify us with a new document within 10 days. We will also help
                            you declare these changes to the HMRC and the Companies House accordingly
                            <br /><br />
                            7) Depending on the needs of your business, the annual relations with 3rd parties (insurance
                            company, ICO registry, web service provider, pension provider, the TPR, etc.) are directly under the
                            responsibility of the business owner. We would like to remind you to check the requirements of your
                            business by contacting such institutions directly.
                            <br /><br />
                            8) Although we continue to agree on a price according to the special situation of each of our
                            customers, our prices for standard service requests are as follows:
                            <ul>
                                <li className='mx-5'>○ Company setup: £250</li>
                                <li className='mx-5'>○ Basic address service: £250</li>
                                <li className='mx-5'>○ VAT registered Businesses:: £1.800</li>
                                <li className='mx-5'>○ Standard Company Accounts: £1.200</li>
                                <li className='mx-5'>○ Sole Trader Accounting Services: £1.000</li>
                                <li className='mx-5'>○ Company closure and/or Dormant Company Accounts: £500</li>
                                <li className='mx-5'>○ Interim Accounts: £700</li>
                            </ul>
                            <br />
                            These prices do not include bookkeeping services, management accounting, tax advice, extra payroll
                            services, special interview and urgent response requests, as well as government fees and VAT. A
                            revised price will be applied to those who request a service change during the period. These prices
                            may change in the new period in line with mutual agreement according to inflation conditions.
                            <br /><br />
                            We have tried to offer debt deferral for our customers who have just started their business, and we
                            continue to do so. However, starting from January 01, 2025, we request monthly payments. We
                            kindly request that our customers who have not completed their debts to date complete their
                            payments by the end of December. Otherwise, we regret to inform you that we will not be able to
                            continue our services for our customers who do not make their payments regularly. Please contact us
                            about your debt information.
                            <br /><br />
                            We would like to thank our customers who make regular payments and follow up on their debts.
                            <br /><br />
                            <span>Best regards,
                                <br />
                                Zeytun ABC Ltd</span>
                        </p>
                    </div>
                </section>
            </main>
            <FloatingActionButton />
            <Footer />

        </React.Fragment>
    );
}