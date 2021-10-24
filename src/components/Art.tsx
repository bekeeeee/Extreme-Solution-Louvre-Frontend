import { useActions } from "../hooks/useActions";

const Art = ({ art }: any) => {
  const { artDetails } = useActions();

  return (
    <div className="card" key={art._id}>
      <img
        onClick={() => artDetails(art._id)}
        className="medium"
        src={art.image}
        alt="art"
      />
      <div className="card-body">
        <h2>{art.artist}</h2>
      </div>
    </div>
  );
};

export default Art;
