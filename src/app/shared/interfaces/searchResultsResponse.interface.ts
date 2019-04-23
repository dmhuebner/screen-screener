import SearchResult from '@shared/interfaces/searchResult.interface';

export default interface SearchResultsResponse {
    Response: boolean;
    Search?: SearchResult[];
    totalResults?: number;
    Error?: string;
}
