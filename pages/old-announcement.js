
import Head from 'next/head'
import React from "react";
import Footer from '../components/footer';
import Navigation from '../components/navigation';
import FloatingActionButton from '../components/floatingActionButton';
import Link from 'next/link';

export default function AnnouncementPage() {
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
                    <div className="notification has-text-centered">
                        Sevgili müşterilerimiz, 4 Kasım 2024 yeni genel duyurumuzu okumak için buraya <Link href="/announcement"><a>tıklayınız</a></Link>
                    </div>
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
                            Henüz vergi ödemesini yapmayanların 31 Ocak 2024’ten önce vergi ödemelerini tamamlamaları gerekmektedir. Vergi beyannamesi hazır olmayanların ise bizle irtibata geçerek 06/04/2022 ile 05/04/2023 tarihleri arasındaki bütün gelirlerini bize iletmeleri gerekmektedir. Bu gelirlere İngiltere dışında bu dönemde kazanılmış olup İngiltere’ye getirilmiş olan gelirler de dahildir. Bizim ilgilendiğimiz İngiltere’deki şirketinizden elde ettiğiniz maaş bilgisi, bizde bulunmaktadır. Bunun dışındaki gelirlerinizi bize iletmeniz gerekmektedir.
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
                            4) Şahıs işletmeleri veya şirketlerde birbirini takip eden son 12 aylık dönemde KDV'ye tabi olabilecek £85.000 tutarında gelire/ciroya ulaşılması durumunda KDV/VAT kaydı zorunlu hale gelmektedir. Dolayısıyla kontrollerinizi yaparak satış hacminizin bu seviyelere yaklaşması durumunda ilgili kayıtlar için ivedilikle bizle irtibata geçmenizi rica ederiz.
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
                                <li className='mx-5'>○ Şirket kurulumu: £200</li>
                                <li className='mx-5'>○ Baz nitelikte adres hizmeti: £100</li>
                                <li className='mx-5'>○ VAT'li şirket muhasebesi: £1.800</li>
                                <li className='mx-5'>○ VAT'siz Şirket Muhasebesi: £1.200</li>
                                <li className='mx-5'>○ Sole Trader Muhasebe Hizmetleri: £900</li>
                                <li className='mx-5'>○ Şirket kapanışı ve/veya Dormant Company Hesapları: £350</li>
                            </ul>
                            <br />
                            Bu fiyatlara ön muhasebe hizmetleri, yönetim muhasebesi (interim accounts), ekstra bordro hizmetleri, özel görüşme ve acil cevap talepleri gibi hizmetler ile devletin aldığı ücretler dahil değildir. Dönemi içinde servis değişiklik talebi bulunanlara göre de revize fiyat uygulanacaktır. Bu fiyatlar enflasyon koşullarına göre yeni dönemde karşılıklı anlaşma doğrultusunda değişebilecektir.
                            <br /><br />
                            İşlerine yeni başlayan müşterilerimiz için bu zamana kadar borç erteleme imkanı sunmaya çalıştık, çalışmaya devam ediyoruz. Ancak, 2024 Ocak ve devamı için aylık düzende ödeme talep etmekteyiz. Bugüne kadar borcunu tamamlamayan müşterilerimizin Aralık sonuna kadar ödemelerini tamamlamalarını rica ediyoruz. Aksi takdirde, üzülerek ifade ederek ödemesini düzenli yapmayan müşterilerimiz için hizmetlerimizi devam ettiremeyeceğimizi bildirmek durumundayız. Lütfen borç bilginiz hakkında bizle irtibata geçiniz.
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