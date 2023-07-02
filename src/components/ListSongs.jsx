import Song from "./Song";
import { dataSongs } from "./data";

const ListSongs = () => {
  return (
    <div>
      {dataSongs.map((item) => {
        return (
          <Song
            id={item.id}
            image={item.cover_url}
            name={item.name}
            artist={item.artist}
            album={item.album}
            year={item.year}
            genre={item.genre}
          />
        );
      })}
    </div>
  );
};

export default ListSongs;
