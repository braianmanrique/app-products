export class Product{
    constructor( 
        public id: string,
        public name: string,
        public description: string,
        public logo: string,
        public date_libe: Date,
        public date_rev: Date,
        public uid?: string
      
    ){
        
    }

    // getLogoUrl(){
    //     console.log('logo')
    //     if(!this.logo){
    //         return `no hay logo`
    //     }else{
    //         return ''
    //     }
    // }
}