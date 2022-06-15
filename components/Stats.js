export default function Stats({ companies, templates, queries }) {
  return (
    <div
      id="stats"
      className="w-[25rem] flex flex-col-reverse md:w-[70rem] md:h-[30rem] md:flex-row justify-between overflow-hidden h-max bg-cardBackground text-mainParagraph rounded-xl "
    >
      <div className="flex flex-col justify-between p-20 md:w-[35rem] ">
        <h1 className="text-4xl text-white font-lexendDeca">
          Get <span className="text-accent">insights</span> that help your
          business grow.
        </h1>
        <p>
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>
        <div className="flex justify-between">
          <div>
            <p className="text-2xl text-white font-lexendDeca">{companies}</p>
            <p>COMPANIES</p>
          </div>
          <div>
            <p className="text-2xl text-white font-lexendDeca">{templates}</p>
            <p>TEMPLATES</p>
          </div>
          <div>
            <p className="text-2xl text-white font-lexendDeca">{queries}</p>
            <p>QUERIES</p>
          </div>
        </div>
      </div>
      <div className="bg-accent md:w-[35rem]">
        <img
          src="/image-header-desktop.jpg"
          alt=""
          className="object-cover w-full h-full mix-blend-multiply"
        />
      </div>
    </div>
  )
}
