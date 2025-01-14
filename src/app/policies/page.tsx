import { Container } from "@/_components/layouts";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <Container className="py-16">
      <main className="container mx-auto p-6 space-y-8">
        <section>
          <div className="container mx-auto text-center pb-4">
            <h1 className="text-2xl font-bold text-secondary sm:text-3xl font-amita">
              गोपनीयता नीति
            </h1>
          </div>
          <p>
            देव आरती संग्रह में, जो आरती है{" "}
            <a href="https://dev-aarti.vercel.app" className="text-secondary">
              https://dev-aarti.vercel.app
            </a>{" "}
            पर उपलब्ध है, हमारे आगंतुकों की गोपनीयता हमारी मुख्य प्राथमिकताओं
            में से एक है। यह गोपनीयता नीति दस्तावेज़ उस जानकारी के प्रकारों को
            शामिल करता है जो देव आरती संग्रह द्वारा एकत्रित और रिकॉर्ड की जाती
            हैं और हम इसका कैसे उपयोग करते हैं।
          </p>

          <p>
            यदि आपके पास अतिरिक्त प्रश्न हैं या हमारी गोपनीयता नीति के बारे में
            अधिक जानकारी की आवश्यकता है, तो कृपया हमसे संपर्क करें।
          </p>

          <p>
            यह गोपनीयता नीति केवल हमारी ऑनलाइन गतिविधियों पर लागू होती है और यह
            हमारी वेबसाइट पर आगंतुकों द्वारा साझा की गई जानकारी और/या देव आरती
            संग्रह में एकत्र की गई जानकारी पर लागू होती है। यह नीति ऑफलाइन एकत्र
            की गई जानकारी या इस वेबसाइट के अलावा अन्य चैनलों से एकत्र की गई
            जानकारी पर लागू नहीं होती है।
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mb-4">सहमति</h2>
          <p>
            हमारी वेबसाइट का उपयोग करके, आप हमारी गोपनीयता नीति से सहमति व्यक्त
            करते हैं और इसके शर्तों से सहमत होते हैं।
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            हम जो जानकारी एकत्र करते हैं
          </h2>
          <p>
            जो व्यक्तिगत जानकारी आपसे प्रदान करने के लिए कहा जाता है, और इसके
            लिए आपसे क्यों पूछा जाता है, यह उस समय स्पष्ट किया जाएगा जब हम आपसे
            आपकी व्यक्तिगत जानकारी प्रदान करने के लिए कहेंगे।
          </p>
          <p>
            यदि आप हमसे सीधे संपर्क करते हैं, तो हम आपके बारे में अतिरिक्त
            जानकारी प्राप्त कर सकते हैं जैसे आपका नाम, ईमेल पता, फोन नंबर, संदेश
            और/या संलग्नक जो आप हमें भेज सकते हैं, और कोई अन्य जानकारी जो आप
            प्रदान करना चुन सकते हैं।
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            हम आपकी जानकारी का उपयोग कैसे करते हैं
          </h2>
          <p>
            हम जो जानकारी एकत्र करते हैं, उसका उपयोग हम विभिन्न तरीकों से करते
            हैं, जिसमें शामिल हैं:
          </p>
          <ul className="list-disc pl-8">
            <li>हमारी वेबसाइट को प्रदान करना, संचालित करना और बनाए रखना</li>
            <li>हमारी वेबसाइट को सुधारना, व्यक्तिगत बनाना और विस्तारित करना</li>
            <li>
              यह समझना और विश्लेषण करना कि आप हमारी वेबसाइट का कैसे उपयोग करते
              हैं
            </li>
            <li>नई उत्पादों, सेवाओं, सुविधाओं और कार्यक्षमता को विकसित करना</li>
            <li>
              आपसे संपर्क करना, सीधे या हमारे किसी भागीदार के माध्यम से, जिसमें
              ग्राहक सेवा, वेबसाइट से संबंधित अपडेट और अन्य जानकारी प्रदान करना,
              और विपणन और प्रचार उद्देश्य शामिल हैं
            </li>
            <li>आपको ईमेल भेजना</li>
            <li>धोखाधड़ी को पहचानना और रोकना</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            लॉग फ़ाइलें
          </h2>
          <p>
            देव आरती संग्रह एक मानक प्रक्रिया का पालन करता है जिसमें लॉग फ़ाइलों
            का उपयोग किया जाता है। ये फ़ाइलें उस समय लॉग करती हैं जब आगंतुक
            वेबसाइटों पर जाते हैं। सभी होस्टिंग कंपनियां ऐसा करती हैं और यह
            होस्टिंग सेवाओं के विश्लेषण का हिस्सा है। लॉग फ़ाइलों द्वारा एकत्र
            की गई जानकारी में इंटरनेट प्रोटोकॉल (IP) पतों, ब्राउज़र प्रकार,
            इंटरनेट सेवा प्रदाता (ISP), दिनांक और समय की मोहर, संदर्भ/निकासी
            पृष्ठ, और संभवतः क्लिक की संख्या शामिल होती है। यह जानकारी किसी भी
            व्यक्तिगत रूप से पहचान योग्य जानकारी से जुड़ी नहीं होती है। इसका
            उद्देश्य रुझानों का विश्लेषण करना, साइट का प्रशासन करना, वेबसाइट पर
            उपयोगकर्ताओं की गतिविधियों का ट्रैक करना और जनसांख्यिकी जानकारी
            एकत्र करना है।
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            कुकीज़ और वेब बीकन
          </h2>
          <p>
            अन्य वेबसाइटों की तरह, देव आरती संग्रह &apos;कुकीज़&apos; का उपयोग
            करता है। इन कुकीज़ का उपयोग जानकारी संग्रहीत करने के लिए किया जाता
            है, जिसमें आगंतुकों की प्राथमिकताएं और उन पृष्ठों की जानकारी शामिल
            होती है जिन्हें आगंतुक ने वेबसाइट पर एक्सेस किया या देखा। यह जानकारी
            उपयोगकर्ता के अनुभव को अनुकूलित करने के लिए उपयोग की जाती है, हमारी
            वेब पेज सामग्री को आगंतुकों के ब्राउज़र प्रकार और/या अन्य जानकारी के
            आधार पर कस्टमाईज़ करने के लिए।
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            तृतीय पक्ष गोपनीयता नीतियाँ
          </h2>
          <p>
            देव आरती संग्रह की गोपनीयता नीति अन्य विज्ञापनदाताओं या वेबसाइटों पर
            लागू नहीं होती है। इसलिए, हम आपको इन तृतीय-पक्ष विज्ञापन सर्वरों की
            संबंधित गोपनीयता नीतियों की जांच करने की सलाह देते हैं ताकि अधिक
            विस्तृत जानकारी प्राप्त की जा सके। इसमें उनके अभ्यास और कुछ विकल्पों
            से बाहर निकलने के निर्देश शामिल हो सकते हैं।
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            CCPA गोपनीयता अधिकार (मेरी व्यक्तिगत जानकारी न बेचे)
          </h2>
          <p>
            CCPA के तहत, अन्य अधिकारों के बीच, कैलिफोर्निया उपभोक्ताओं के पास
            निम्नलिखित अधिकार हैं:
          </p>
          <ul className="list-disc pl-8">
            <li>
              किसी व्यवसाय से अनुरोध करना जो उपभोक्ता का व्यक्तिगत डेटा एकत्र
              करता है, यह खुलासा करें कि वह कौन से व्यक्तिगत डेटा की श्रेणियाँ
              और विशिष्ट टुकड़े एकत्र कर चुका है।
            </li>
            <li>
              किसी व्यवसाय से अनुरोध करना कि वह उपभोक्ता के बारे में एकत्रित की
              गई कोई भी व्यक्तिगत जानकारी हटा दे।
            </li>
            <li>
              किसी व्यवसाय से अनुरोध करना जो उपभोक्ता का व्यक्तिगत डेटा बेचता
              है, वह उपभोक्ता का व्यक्तिगत डेटा न बेचे।
            </li>
          </ul>
          <p>
            यदि आप कोई अनुरोध करते हैं, तो हमारे पास आपको एक महीने के भीतर उत्तर
            देने का समय है। यदि आप इन अधिकारों का उपयोग करना चाहते हैं, तो कृपया
            हमसे संपर्क करें।
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            GDPR डेटा संरक्षण अधिकार
          </h2>
          <p>
            हम यह सुनिश्चित करना चाहते हैं कि आप अपनी सभी डेटा संरक्षण अधिकारों
            से पूरी तरह से अवगत हैं। प्रत्येक उपयोगकर्ता के पास निम्नलिखित
            अधिकार हैं:
          </p>
          <ul className="list-disc pl-8">
            <li>
              पहुँच का अधिकार – आपके पास अपनी व्यक्तिगत डेटा की प्रतियाँ प्राप्त
              करने का अधिकार है।
            </li>
            <li>
              सुधार का अधिकार – आपके पास हमसे यह अनुरोध करने का अधिकार है कि हम
              कोई भी जानकारी जो आप गलत मानते हैं, उसे सुधारें।
            </li>
            <li>
              मिटाने का अधिकार – आपके पास हमसे यह अनुरोध करने का अधिकार है कि हम
              आपकी व्यक्तिगत डेटा को हटा दें, कुछ शर्तों के तहत।
            </li>
            <li>
              प्रसंस्करण को प्रतिबंधित करने का अधिकार – आपके पास यह अनुरोध करने
              का अधिकार है कि हम आपकी व्यक्तिगत डेटा के प्रसंस्करण को कुछ शर्तों
              के तहत प्रतिबंधित करें।
            </li>
            <li>
              प्रसंस्करण का विरोध करने का अधिकार – आपके पास हमारे द्वारा आपकी
              व्यक्तिगत डेटा के प्रसंस्करण का विरोध करने का अधिकार है, कुछ
              शर्तों के तहत।
            </li>
            <li>
              डेटा पोर्टेबिलिटी का अधिकार – आपके पास यह अनुरोध करने का अधिकार है
              कि हम जो डेटा एकत्रित किए हैं, उसे अन्य संगठन में स्थानांतरित
              करें, या सीधे आपको, कुछ शर्तों के तहत।
            </li>
          </ul>
          <p>
            यदि आप कोई अनुरोध करते हैं, तो हमारे पास आपको एक महीने के भीतर उत्तर
            देने का समय है। यदि आप इन अधिकारों का उपयोग करना चाहते हैं, तो कृपया
            हमसे संपर्क करें।
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            बच्चों की जानकारी
          </h2>
          <p>
            हमारी एक और प्राथमिकता बच्चों की सुरक्षा सुनिश्चित करना है जब वे
            इंटरनेट का उपयोग करते हैं। हम माता-पिता और अभिभावकों को प्रोत्साहित
            करते हैं कि वे बच्चों की ऑनलाइन गतिविधियों को देखे, भाग लें और/या
            उनकी गतिविधियों को मार्गदर्शन करें।
          </p>
          <p>
            देव आरती संग्रह जानबूझकर 13 वर्ष से कम आयु के बच्चों से व्यक्तिगत
            पहचान योग्य जानकारी एकत्र नहीं करता है। यदि आपको लगता है कि आपके
            बच्चे ने हमारी वेबसाइट पर ऐसी जानकारी प्रदान की है, तो हमसे तुरंत
            संपर्क करने की सलाह देते हैं और हम इसे अपने रिकार्ड्स से हटा देने के
            लिए पूरी कोशिश करेंगे।
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            हमसे संपर्क करें
          </h2>
          <p>
            यदि आपको इस गोपनीयता नीति के बारे में कोई प्रश्न हो, तो कृपया हमसे
            संपर्क करें <Link href="/contact">हमसे संपर्क करें</Link> पृष्ठ पर
            जाकर।
          </p>
        </section>
      </main>
    </Container>
  );
};

export default page;
