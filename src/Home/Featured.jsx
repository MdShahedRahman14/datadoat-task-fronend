/* eslint-disable react/no-unescaped-entities */


const Featured = () => {
    return (
        <div className=" grid mb-12 my-16">
      <h1 className="text-2xl text-center font-bold my-20 ">
        Why We Are Best In The Market?
      </h1>
    
        <div className=" mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-16  gap-6 ">
          <div className="card text-left  card-compact w-72 bg-base-100 shadow-xl p-4">
            <figure>
              <img className="w-20" src="https://rebrand.ly/27e2a7" alt="photo" />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold">Diverse Course Options</h2>
              <p className="font-medium">
              Access a wide range of courses on various subjects.
Explore niche topics and specialized skills not readily available in traditional education.
              </p>
            </div>
          </div>
          <div className="card text-left  card-compact w-72 bg-base-100 shadow-xl p-4">
            <figure>
              <img className="w-20" src="https://rebrand.ly/c10401" alt="photo" />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold">
              Community Building
              </h2>
              <p className="font-medium">
              Foster a community of learners with forums, discussion boards, and collaborative projects.
Encourage networking and knowledge sharing among participants.
              </p>
            </div>
          </div>
          <div className="card text-left  card-compact w-72 bg-base-100 shadow-xl p-4">
            <figure>
              <img className="w-20" src="https://shorturl.at/agiHR" alt="photo" />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold">
              Certification and Recognition
              </h2>
              <p className="font-medium">
              Earn certificates upon course completion, enhancing one's professional profile.
Gain recognition for acquired skills and knowledge in specific fields.
              </p>
            </div>
          </div>
          <div className="card text-left  card-compact w-72 bg-base-100 shadow-xl p-4">
            <figure>
              <img className="w-20" src="https://shorturl.at/tyLQ7" alt="photo" />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold">Cost-Effective Learning

</h2>
              <p className="font-medium">
              Save money on commuting and traditional course fees.
Choose from a range of pricing models, including free and affordable options.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Featured;