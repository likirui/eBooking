import useFetch from "../../hooks/useFetch";
import "./featured.css";
import nairobi from '../../images/nairobi.jpg';
import mombasa from '../../images/mombasa.jpg';
import kisumu from '../../images/kisumu.jpg';

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=berlin,madrid,london"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src={ nairobi }
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Nairobi</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src={ mombasa }
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Mombasa</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src={ kisumu }
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Kisumu</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
