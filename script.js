gsap.registerPlugin(ScrollTrigger);

// Başlık animasyonu
gsap.from(".animate-title", {
  duration: 1.5,
  y: 50,
  opacity: 0,
  ease: "power3.out"
});

gsap.from(".animate-sub", {
  duration: 1.5,
  y: 30,
  opacity: 0,
  delay: 0.3,
  ease: "power3.out"
});

// Kaydırdıkça beliren kart animasyonu (Rolex tarzı)
gsap.from(".animate-card", {
  scrollTrigger: {
    trigger: ".animate-card",
    start: "top 80%",
  },
  duration: 1.2,
  y: 80,
  opacity: 0,
  ease: "power2.out"
});