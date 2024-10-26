import InfoBox from "./InfoBox";
const InfoBoxes = () => {
  return (
    <div>
      <section>
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <InfoBox isRenter={true} />
            <InfoBox isRenter={false} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default InfoBoxes;
