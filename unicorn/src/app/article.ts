import { Tag } from './tag';
import { Author } from './author';


export class Article {
	created : number;
	edited : number;
	headline : string;
	abstract : string;
	authors : Author[];
	copy : string;
	slug : string;
	status : string;
	tags : Tag[];
	images : string[];

}
