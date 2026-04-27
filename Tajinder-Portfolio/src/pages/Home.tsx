function Home() {
  return (
    <>
      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto"
      >
        <p className="text-sm uppercase tracking-widest text-zinc-500 mb-4">
          Game & Software Developer
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-myNavy leading-tight mb-6">
          Welcome to my <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-myTurquoise to-myLightNavy">
            Portfolio
          </span>
        </h1>
        <p className="text-lg text-myLightNavy max-w-xl leading-relaxed">
          Hey, I'm Tajinder Nijjar. I am a game and software developer with
          knowledge and experience in multiple areas. Here, you can get an
          overview of some of the projects I've worked on and/or currently
          working on.
        </p>
        <div className="mt-10 w-12 h-1 bg-myTurquoise rounded-full" />
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto border-t border-zinc-100"
      >

        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-8">
          Who I Am
        </h2>
        <p className="text-lg text-zinc-500 max-w-2xl leading-relaxed">
          I am a passionate and dedicated game and software developer with a
          strong background in programming and problem-solving. I have experience
          working on various projects throughout my time at school, with some
          select projects highlighted in the projects section. In addition, I
          have 4 months of experience as an intern working as a full stack
          developer at AI Financial. I am always eager to learn new technologies
          and improve my skills, and I am committed to delivering high-quality
          work that meets the needs of my clients and users.
        </p>
      </section>
    </>
  );
}

export default Home;