import { error } from '@sveltejs/kit';

export function load({ params }: {params: any}) {	
	if (params.slug === 'hello-world') {		
		return {			
			title: 'Hello world!',			
			content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'		
		};	
	}
	error(404, "Oops...");
}
