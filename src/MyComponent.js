import { useEffect, useState } from "react";
import useFetch from "./useFetch";

const CLIENT_ID =
  "ca5a2a324ba06f2cf8bede88a989bb6c2f5f87730032b3c6256b72888f2cc94c";
const API_URL = "https://api.unsplash.com/photos/";

const photos_url = `${API_URL}?page=1&&per_page=10&&client_id=${CLIENT_ID}`;

// const url = `https://learn.javascript.ru/article/fetch-abort/demo/hang`;

export default function MyComponent() {
  const [state, setState] = useState();

  const { query, cancel } = useFetch();

  useEffect(() => {
    query(photos_url).then((response) => {
      if (!response.aborted) {
        setState(response.data);
      }
    });

    return () => {
      cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="my-component">
      <h1>My component</h1>
    </div>
  );
}
