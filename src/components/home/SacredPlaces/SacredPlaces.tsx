"use client";

import { Container } from "@/components/layouts";
import Image from "next/image";

const places = [
  {
    id: 1,
    title: "12 ज्योतिर्लिंग",
    description: "भगवान शिव के 12 सबसे पवित्र और जाग्रत मंदिर।",
    image: "https://images.unsplash.com/photo-1600085448666-4e0e561bfaf6?auto=format&fit=crop&q=80&w=800",
    count: 12
  },
  {
    id: 2,
    title: "51 शक्ति पीठ",
    description: "माता सती के गिरे हुए अंगों से स्थापित पावन स्थल।",
    image: "https://images.unsplash.com/photo-1596422846543-74c6fc0e28f1?auto=format&fit=crop&q=80&w=800",
    count: 51
  },
  {
    id: 3,
    title: "चार धाम",
    description: "बद्रीनाथ, द्वारका, पुरी और रामेश्वरम की पवित्र यात्रा।",
    image: "https://images.unsplash.com/photo-1593322194605-23fa97cb137b?auto=format&fit=crop&q=80&w=800",
    count: 4
  },
  {
    id: 4,
    title: "सप्त पुरी",
    description: "मोक्ष प्रदान करने वाली सात पवित्र प्राचीन नगरियां।",
    image: "https://images.unsplash.com/photo-1621217036686-281b375d0b90?auto=format&fit=crop&q=80&w=800",
    count: 7
  }
];

const SacredPlaces = () => {
  return (
    <section className="py-16 md:py-24 relative bg-[#FDFBF7] dark:bg-[#151210]">
      <Container>
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-accent/30" />
            <span className="text-accent font-gotu tracking-widest text-sm font-bold uppercase">पवित्र तीर्थ</span>
            <div className="h-px w-12 bg-accent/30" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-amita text-secondary text-center mb-6">पावन धाम एवं तीर्थ स्थल</h2>
          <p className="text-secondary/70 font-gotu text-center max-w-2xl text-lg">भारत वर्ष के इन प्राचीन और सिद्ध स्थानों की जानकारी प्राप्त करें और अपने आध्यात्मिक जीवन को समृद्ध बनाएं।</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {places.map((place) => (
            <div key={place.id} className="group relative rounded-3xl overflow-hidden cursor-pointer h-[400px]">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={place.image}
                  alt={place.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="w-10 h-10 rounded-full bg-accent/20 backdrop-blur-md flex items-center justify-center text-accent-light font-bold mb-4 border border-accent/30">
                    {place.count}
                  </div>
                  <h3 className="text-2xl font-bold text-white font-amita mb-2">{place.title}</h3>
                  <p className="text-white/80 font-gotu text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {place.description}
                  </p>
                  
                  <div className="mt-4 flex items-center gap-2 text-accent-light text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    <span>दर्शन करें</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SacredPlaces;
