import React, { useState, useRef } from 'react';
import api from '../../api/axios'; // Ensure this path is correct
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const SearchInput = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [games, setGames] = useState([]);
    const [isListVisible, setIsListVisible] = useState(false);
    const searchListRef = useRef(null);
    const navigate = useNavigate();

    const handleSearch = async () => {
        if (searchTerm.trim()) {
            try {
                const response = await api.get('/games', {
                    params: {
                        page_size: 5,
                        search: searchTerm,
                        key: "947593537b0741b5867caa032ddf0060"
                    }
                });
                setGames(response.data.results);
                setIsListVisible(true);
            } catch (error) {
                console.error('Error fetching games:', error);
            }
        } else {
            setGames([]);
            setIsListVisible(false);
        }
    };

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        handleSearch();
    };

    const handleGameClick = (id) => {
        navigate(`/games/${id}`); // Navigate to the game's detail page
        setSearchTerm('');
        setGames([]);
        setIsListVisible(false);
    };

    const handleMouseEnter = () => {
        setIsListVisible(true);
    };

    const handleMouseLeave = () => {
        setIsListVisible(false);
    };

    return (
        <SearchWrapper>
            <SearchBar>
                <FaSearch className="search-icon" />
                <input 
                    type="text" 
                    placeholder="Search Game Title ..."
                    value={searchTerm}
                    onChange={handleChange}
                    onFocus={() => setIsListVisible(true)}
                />
            </SearchBar>
            <div 
                className={`search-list ${isListVisible ? 'show' : 'hide'}`}
                ref={searchListRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {games.map(game => (
                    <div 
                        key={game.id} 
                        className="search-list-item" 
                        onClick={() => handleGameClick(game.id)}
                    >
                        <img src={game.background_image} alt={game.name} />
                        <div className="info">
                            <h3>{game.name}</h3>
                            <p>{game.released}</p>
                        </div>
                    </div>
                ))}
            </div>
        </SearchWrapper>
    );
};

const SearchWrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;

    .search-list {
        position: absolute;
        top: 45px;
        left: 0;
        width: 100%;
        background: white;
        border-radius: 0 0 8px 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        z-index: 1000;

        &.hide {
            display: none;
        }

        .search-list-item {
            display: flex;
            align-items: center;
            padding: 10px;
            cursor: pointer;
            transition: background 0.3s;

            &:hover {
                background: #f1f1f1;
            }

            img {
                width: 50px;
                height: 50px;
                object-fit: cover;
                border-radius: 4px;
                margin-right: 10px;
            }

            .info {
                h3 {
                    margin: 0;
                    font-size: 16px;
                    color: #333;
                }

                p {
                    margin: 0;
                    font-size: 14px;
                    color: #666;
                }
            }
        }
    }
`;

const SearchBar = styled.div`
    display: flex;
    align-items: center;
    background: white;
    padding: 10px 15px;
    border-radius: 25px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s;

    &:hover,
    &:focus-within {
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }

    .search-icon {
        color: #666;
        margin-right: 10px;
    }

    input {
        border: none;
        outline: none;
        width: 100%;
        font-size: 16px;
        color: #333;

        &::placeholder {
            color: #999;
        }
    }
`;

export default SearchInput;