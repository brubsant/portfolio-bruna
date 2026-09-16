const particles = document.querySelectorAll('.background-game span');

  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;

    particles.forEach((particle, index) => {
      const depth = (index + 1) * 0.6;
      particle.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
    });
  });
