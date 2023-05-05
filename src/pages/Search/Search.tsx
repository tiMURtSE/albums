import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import CommonAlbumView from "components/CommonAlbumView/CommonAlbumView";
import Navbar from "components/Navbar/Navbar";
import Container from "styles/components/Container.styled";
import Paddings from "styles/components/Paddings.styled";
import Wrapper from "styles/components/Wrapper.styled";
import { Loader, Subtitle, Title } from "./Search.styled";
import { Albums } from "types";
import formatAlbum from "utils/formatAlbum";
import search from "services/api/search.api";

const Search = () => {
	const [albums, setAlbums] = useState<Albums>([]);

	const [query, _] = useState(useParams().query);
	const [isLoading, setIsLoading] = useState(true);

	const searchAlbums = async (query: string) => {
		const searchResults = await search(query);
		const albums = searchResults.albums.items;

		for (let i = 0; i < albums.length; i++) {
			albums[i] = formatAlbum(albums[i]);
		}

		setAlbums(albums);
		setIsLoading(false);
	};

	useEffect(() => {
		if (query && isLoading) searchAlbums(query);
	}, []);

	return (
		<>
			<Navbar />

			<Paddings>
				<Container>
					<Title>
						Результаты поиска для: <span>{query}</span>
					</Title>
					<Wrapper>
						{isLoading ? (
							<Loader />
						) : (
							<>
								<Subtitle>Результаты</Subtitle>

								{albums.map(album => (
									<CommonAlbumView
										album={album}
										key={album.id}
									/>
								))}
							</>
						)}
					</Wrapper>
				</Container>
			</Paddings>
		</>
	);
};

export default Search;