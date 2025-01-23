import { Fragment } from "react";
import { SparklesIcon } from "lucide-react";

const skills = ["Java", "Python", "HTML", "CSS", "React", "JavaScript", "Node.js", "TypeScript", "MongoDB"];
const skills2 = ["Tailwind", "Next.js", "Git", "REST API", "Express.js", "Redux", "Kotlin",];
const skills3 = ["Firebase", "AWS", "MySql", "Three.js", "Snity.io", "NoSql", "OpneCV", "TensorFlow", "NPM"]

const Skills = () => {
  return (
    <div className="py-16 lg:py-28 bg-[linear-gradient(to_top,#000,#381a5f_80%)] overflow-x-clip">
      <div className="text-white text-center mx-auto w-[450px] md:min-w-[1200px] p-8 ">
        <h1 className="text-6xl font-semibold my-12">
          My <span className="text-orange-400">Skills</span>
        </h1>

        {/* First Scrolling Skills - Left to Right */}
        <div>
          <div className="flex overflow-hidden ">
            <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s]">
              {[...new Array(2)].fill(0).map((_, idx) => (
                <Fragment key={idx}>
                  {skills.map((skill) => (
                    <div
                      key={skill}
                      className="inline-flex gap-4 items-center"
                    >
                      <div className="bg-white/10 p-4 rounded-xl flex items-center justify-center shadow-md">
                        <span className="text-white uppercase font-extrabold text-lg">
                          {skill}
                        </span>
                      </div>
                      <SparklesIcon className="size-6 text-white/70" />
                    </div>
                  ))}
                </Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Second Scrolling Skills - Right to Left */}
        <div className="flex overflow-hidden ">
          <div className="flex " >
            <div className="flex flex-none gap-4 pr-4 py-3 animate-move-right [animation-duration:30s]">
              {[...new Array(2)].fill(0).map((_, idx) => (
                <Fragment key={idx}>
                  {skills2.map((skill) => (
                    <div
                      key={skill}
                      className="inline-flex gap-4 items-center"
                    >
                      <div className="bg-white/10 p-4 rounded-xl flex items-center justify-center shadow-md">
                        <span className="text-white uppercase font-extrabold text-lg">
                          {skill}
                        </span>
                      </div>
                      <SparklesIcon className="size-6 text-white/70" />
                    </div>
                  ))}
                </Fragment>
              ))}
            </div>
          </div>
        </div>




        {/* third Scrolling Skills - Left to Right */}
        <div className="flex overflow-hidden ">
          <div className="flex ">
            <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s]">
              {[...new Array(2)].fill(0).map((_, idx) => (
                <Fragment key={idx}>
                  {skills3.map((skill) => (
                    <div
                      key={skill}
                      className="inline-flex gap-4 items-center"
                    >
                      <div className="bg-white/10 p-4 rounded-xl flex items-center justify-center shadow-md">
                        <span className="text-white uppercase font-extrabold text-lg">
                          {skill}
                        </span>
                      </div>
                      <SparklesIcon className="size-6 text-white/70" />
                    </div>
                  ))}
                </Fragment>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;