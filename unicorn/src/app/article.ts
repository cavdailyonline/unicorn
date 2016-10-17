import { Tag } from './tag';
import { Author } from './author';


export class Article {
	id : number;
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
