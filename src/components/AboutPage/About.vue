<!-- <template>
  <section class="about-wrapper">
    <div class="about-content">
      <h1>About Me</h1>
      <p>
        Hey! I'm <strong>Ahmed Samir</strong>, a front-end developer who's
        always curious about building real-world web applications. <br /><br />
        I built this weather app as part of my journey to improve my skills and
        create something actually useful.
        <br /><br />
        I wanted to work on a project that uses real-time data and presents it
        in a clean, modern, and responsive design.
      </p>

      <div class="contact-box">
        <div class="email">
          <i class="fa-regular fa-envelope"></i>
          <p>Email: ahmedsamir0523@gmail.com</p>
        </div>
        <div class="phone">
          <i class="fa-solid fa-phone"></i>
          <p>Phone: +20 123 456 7890</p>
        </div>
        <div class="linkedin">
          <i class="fa-brands fa-linkedin"></i>
          <p>
            LinkedIn:
            <a
              href="https://www.linkedin.com/in/ahmed-samir-a783732ab"
              target="_blank"
              >linkedin.com/in/ahmed-samir-a783732ab</a
            >
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-wrapper {
  margin-top: 2rem;
  background-size: cover;
  background-position: center;
  /* min-height: 100vh; */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  backdrop-filter: blur(4px);
}

.about-content {
  background-color: rgba(0, 0, 0, 0.6);
  padding: 2.5rem;
  border-radius: 16px;
  max-width: 700px;
  color: #fff;
  text-align: center;
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.1);
  animation: fadeIn 1s ease;
}

.about-content h1 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #ff9800;
}

.about-content p {
  font-size: 1.1rem;
  line-height: 1.7;
}

.contact-box {
  margin-top: 2rem;
  text-align: left;
  font-size: 1rem;
}
.contact-box .email,
.phone,
.linkedin {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.fa-envelope,
.fa-phone,
.fa-linkedin {
  font-size: 18px;
}
.contact-box a {
  color: #ffa726;
  text-decoration: underline;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style> -->

<template>
  <section class="about-section">
    <div class="about-content">
      <h1>About This Project</h1>
      <p>
        Hi, I'm Ahmed Samir — a passionate front-end developer who's constantly
        exploring ways to turn ideas into interactive experiences.
      </p>
      <p>
        I built this weather application to sharpen my skills in building
        real-world projects using Vue.js. The app lets users search for any city
        and get current weather info, as well as a 5-day forecast.
      </p>
      <p>
        Technologies used: <strong>Vue 3, Vue Router, Pinia, Axios</strong>. The
        project is fully responsive and styled from scratch.
      </p>
      <p>
        I designed it to be clean, fast, and user-friendly, keeping in mind both
        mobile and desktop experiences.
      </p>
      <p>
        I'm always looking for opportunities to learn and grow, and I'm
        currently open to internships or junior front-end roles.
      </p>
      <div class="contact-box">
        <div class="email">
          <i class="fa-regular fa-envelope"></i>
          <p>Email: ahmedsamir0523@gmail.com</p>
        </div>
        <div class="phone">
          <i class="fa-solid fa-phone"></i>
          <p>Phone: +20 111 521 0212</p>
        </div>
        <div class="linkedin">
          <i class="fa-brands fa-linkedin"></i>
          <p>
            LinkedIn:
            <a
              href="https://www.linkedin.com/in/ahmed-samir-a783732ab"
              target="_blank"
              >linkedin.com/in/ahmed-samir-a783732ab</a
            >
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  padding: 0px 20px;
  padding-top: 2rem;
  color: white;
  font-family: sans-serif;
}

.about-content {
  width: 55%;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 20px 35px;
  border-radius: 16px;
  margin: auto;
  animation: fadeIn 1s ease;
}

.about-content h1 {
  font-size: 40px;
  margin-bottom: 1rem;
  text-align: center;
  color: #ff9800;
}

.about-content p {
  font-size: 19px;
  margin-bottom: 1rem;
}
.contact-box {
  margin-top: 2rem;
  text-align: left;
  font-size: 16px;
}
.contact-box p {
  margin-bottom: 0;
}
.contact-box .email,
.phone,
.linkedin {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.fa-envelope,
.fa-phone,
.fa-linkedin {
  font-size: 18px;
}
.contact-box a {
  color: #ffa726;
  text-decoration: underline;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@media screen and (max-width: 576px) {
  .about-section {
    padding: 0px 10px;
    padding-top: 1rem;
  }

  .about-content {
    width: 100%;
    padding: 10px 15px;
  }

  .about-content h1 {
    font-size: 25px;
    margin-bottom: 0.2rem;
  }

  .about-content p {
    font-size: 15px;
    margin-bottom: 0.5rem;
  }
  .contact-box {
    margin-top: 1rem;
    font-size: 14px;
  }
  .contact-box p {
    margin-bottom: 0;
  }
  .fa-envelope,
  .fa-phone,
  .fa-linkedin {
    display: none;
  }
}
@media screen and (min-width: 577px) and (max-width: 768px) {
  .about-section {
    padding: 10px 13px;
    padding-top: 1rem;
  }

  .about-content {
    width: 90%;
    padding: 15px 20px;
  }

  .about-content h1 {
    font-size: 30px;
    margin-bottom: 0.2rem;
  }

  .about-content p {
    font-size: 16px;
    margin-bottom: 0.5rem;
  }
  .contact-box {
    margin-top: 1rem;
    font-size: 15px;
  }
  .contact-box p {
    margin-bottom: 0;
  }
}
@media screen and (min-width: 769px) and (max-width: 1024px) {
  .about-section {
    padding: 10px 15px;
    padding-top: 1rem;
  }

  .about-content {
    width: 75%;
    padding: 15px 20px;
  }

  .about-content h1 {
    font-size: 30px;
    margin-bottom: 0.5rem;
  }

  .about-content p {
    font-size: 17px;
    margin-bottom: 0.7rem;
  }
  .contact-box {
    margin-top: 1.5rem;
  }
  .contact-box p {
    margin-bottom: 0;
  }
}
@media screen and (min-width: 1025px) and (max-width: 1240px) {
  .about-section {
    padding: 15px 15px;
    padding-top: 1.5rem;
  }

  .about-content {
    width: 65%;
    padding: 15px 30px;
  }

  .about-content h1 {
    font-size: 35px;
    margin-bottom: 0.5rem;
  }

  .about-content p {
    font-size: 18px;
    margin-bottom: 0.7rem;
  }
  .contact-box {
    margin-top: 1.5rem;
  }
  .contact-box p {
    margin-bottom: 0;
  }
}
</style>
