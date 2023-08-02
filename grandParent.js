import { LightningElement, api } from 'lwc';

export default class GrandParent extends LightningElement {
    compCount = 0;

    @api grandReset(){
        this.compCount = 0;
        this.template.querySelector('c-parent').parentReset();
    }

    hadleChildParent(event){
        
        if(event.detail == "Select"){
            this.compCount++;
        }
        else{
            this.compCount--;
        }

    }
}