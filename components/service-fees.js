import { useCookies } from "react-cookie";
import React from "react";

export default function ServiceFees() {
    const [cookies] = useCookies(["language"]);
    const currentLanguage = cookies["language"];

    if (currentLanguage == "english") {
        return (<React.Fragment></React.Fragment>)
    }

    return (
        <section className="section container" id="service-fees">
            <h2 className="title">Servis Ücretleri</h2>
            <br />

            <table className="table is-responsive is-fullwidth is-bordered">
                <thead>
                    <tr>
                        <th align="center">Servis İsmi</th>
                        <th align="center">Ücret<sup>1</sup></th>
                        <th align="center">Faturalama</th>
                        <th align="center">Servisler</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td align="center">Şirket Kurulum Paketi</td>
                        <td align="center">£200</td>
                        <td align="center">Peşin / 1 defalık</td>
                        <td align="center">
                            <ul>
                                <li> Şirket kurulumu ön bilgilendirme</li>
                                <li> Şirket isim uygunluğu kontrolü</li>
                                <li> Şirket tescili</li>
                                <li> Companies House (Ticaret Kurumu) kayıtları</li>
                                <li> HMRC (Maliye) kayıtlarının yapılması </li>
                                <li> Şirket vergi numarası alma</li>
                                <li> EORI (İngiltere’ye ithalat) numarası alma</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td align="center">Şirket Kayıtlı Adres Hizmeti</td>
                        <td align="center">£100</td>
                        <td align="center">Yıllık</td>
                        <td align="center">
                            <ul>
                                <li> Londra merkezinde şirket adresi</li>
                                <li> Resmi belgelerin dijital ortamda saklanması</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td align="center">Temel Muhasebe Paketi</td>
                        <td align="center">£1200</td>
                        <td align="center">Yıllık / 12 aya kadar taksit imkanı</td>
                        <td align="center">
                            <ul>
                                <li> Genel amaçlı ön bilgilendirme</li>
                                <li> Yılsonu mali raporların hazırlanması<sup>2</sup></li>
                                <li> Şirket Vergi formlarının hazırlanması</li>
                                <li> Kişisel Vergi beyannamesi hazırlanması<sup>3</sup></li>
                                <li> Raporların ilgili kurumlara sunulması </li>
                                <li> Standart bordro hizmetleri<sup>4</sup></li>
                                <li> Ön muhasebe programı kullanım hakkı</li>
                                <li> Şirket muhasebe evrakı için dijital depo</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td align="center">KDV Kaydı Başvurusu</td>
                        <td align="center">£150</td>
                        <td align="center">Peşin / 1 defalık</td>
                        <td align="center">
                            <ul>
                                <li> VAT ön bilgilendirme</li>
                                <li> VAT standart başvurusu yapılması</li>
                                <li> VAT hesabının oluşturulması<sup>5</sup></li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td align="center">KDV Beyannameleri</td>
                        <td align="center">£150</td>
                        <td align="center">3’er aylık dönemlerde</td>
                        <td align="center">
                            <ul>
                                <li> Şirket tarafından zamanı içinde hazırlanan tabloların kontrolü </li>
                                <li> HMRC’ye KDV beyannamesinin sunulması</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td align="center">KDV’li Şirket Yıllık Muhasebe Paketi</td>
                        <td align="center">£1800</td>
                        <td align="center">Yıllık / 12 aya kadar taksit imkanı</td>
                        <td align="center">
                            <ul>
                                <li> Temel Muhasebe Paketi</li>
                                <li> KDV Beyannameleri</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td align="center">Ön Muhasebe Hizmetleri</td>
                        <td align="center">£25</td>
                        <td align="center">Saatlik</td>
                        <td align="center">
                            <ul>
                                <li> Alış faturaları işleme</li>
                                <li> Satış faturaları işleme</li>
                                <li> Banka mutabakatı</li>
                                <li> Tahsilatlar </li>
                                <li> Fatura ödemeleri </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td align="center">Marka Tescili</td>
                        <td align="center">£400</td>
                        <td align="center">Peşin / 1 defalık</td>
                        <td align="center">
                            <ul>
                                <li> Birleşik Krallık’ta marka tescili başvurusu<sup>6</sup></li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td align="center">Mali Danışmanlık</td>
                        <td align="center">£100</td>
                        <td align="center">Saatlik</td>
                        <td align="center">
                            <ul>
                                <li> Ticari ve mali konularda uzman danışmanlığı</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td align="center">Muhasebeci Mektubu</td>
                        <td align="center">£100</td>
                        <td align="center">Peşin / 1 defalık</td>
                        <td align="center">
                            <ul>
                                <li> Banka, Emlak Şirketi, Konsolsoluk, vb kurumlar için hazırlanacak mektuplar</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
            <br />
            <p className="subtitle">
            <sup>1</sup> Fiyatlara devletin aldığı ücretler değildir. Birleşik Krallık enflasyon oranlarına göre yıllık fiyat revizyonu yapılacaktır. Ayrıca ek işlem gerektiren talepler ayrıca ücretlendirilir.
            <sup>2</sup> Yılsonu raporu, dönemlik raporu kastetmektedir. Dönem kısalması durumunda fiyat değişmeyecektir. Dönem uzaması durumunda aylık fiyat eklenecektir. Yönetim Muhasebesi ve geçici hesaplar olarak ifade edilen Interim Accounts £700 olarak ücretlendirilir.
            <sup>3</sup> Standard bordro hizmetleri: Aylık sabit maaşlı en fazla 4 işçinin yer aldığı bordro için geçerlidir. Pension kaydı ve auto enrolment hizmetleri, değişken ücretlendirme ve daha fazla sayıda işçi durumuna göre ek fiyat verilecektir.
            <sup>4</sup> Standart Self Assessment Hizmetleri: Şirket muhasebe kayıtlarını bizim takip ettiğimiz bir hissedar için geçerli olan beyannameyi ifade etmektedir. Birden çok hissedar olması veya şirket geliri haricinde ek hesap gerektiren işlemler ayrıca ücretlendirilir. Sadece Self Assessment beyanı için, bütün belge ve bilgiler hazır olduğunda £500 olarak ücretlendirilir. Sole Trader muhasebesi fiyatı yıllık £900 olarak ücretlendirilmektedir.
            <sup>5</sup> HMRC’nin ek bilgi talebi ve VAT denetim sürecindeki ek hizmetler fiyata dahil değildir.
            <sup>6</sup> İngiltere’de tek marka tescili başvurusu için geçerlidir.
            </p>
        </section>
    );
}
