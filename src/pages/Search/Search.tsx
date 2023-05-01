import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CommonAlbumView from "components/CommonAlbumView/CommonAlbumView";
import Navbar from "components/Navbar/Navbar";
import Container from "styles/components/Container.styled";
import Paddings from "styles/components/Paddings.styled";
import Wrapper from "styles/components/Wrapper.styled";
import { Subtitle, Title } from "./Search.styled";
import { search } from "api";
import formatSeveralAlbums from "utils/formatSearchAlbum";
import { Albums } from "types";

const Search = () => {
    const [albums, setAlbums] = useState<Albums>([]);
    const { state: queryValue } = useLocation();
    const [query, _] = useState(queryValue);
    const [myAlbums, setMyAlbums] = useState<Albums>([]);
    const isMyAlbumsFound = Boolean(myAlbums.length);

    const searchAlbums = async (query: string) => {
        const albums = await search(query);

        setAlbums(formatSeveralAlbums(albums));
    };

    useEffect(() => {
        if (query) searchAlbums(query);
    }, []);
    
    return (
        <>
            <Navbar />

            <Paddings>
                <Container>
                    <Title>Результаты поиска для: <span>{query}</span></Title>

                    <Wrapper>
                        {(isMyAlbumsFound) && <Subtitle>Мои альбомы</Subtitle>}

                        <Subtitle>Результаты</Subtitle>

                        {albums.map(album =>
                            <CommonAlbumView album={album} key={album.id} />
                        )}
                    </Wrapper>
                </Container>
            </Paddings>

        </>
    );
};

export default Search;