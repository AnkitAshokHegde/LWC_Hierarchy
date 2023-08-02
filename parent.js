import { LightningElement, api } from 'lwc';

export default class Parent extends LightningElement {
    childOne = "Not selected";
    childTwo = "Not selected";
    childThree = "Not selected";

   @api parentReset(){

        this.childOne = "Not selected";
        this.childTwo = "Not selected";
        this.childThree = "Not selected";

        // this.template.querySelector('c-child-comp-one').childReset();
        // this.template.querySelector('c-child-comp-two').childReset();
        // this.template.querySelector('c-child-comp-three').childReset();
        const childrenList = this.template.querySelectorAll('c-child-comp');
        childrenList.forEach(element => {
            element.childReset();
        });
    }

    handleChild(event){
        switch(event.target.childName){
            case "childOne" :  this.childOne = (event.detail == "Select") ? "Selected" : "Not Selected";
                break;
            case "childTwo" :  this.childTwo = (event.detail == "Select") ? "Selected" : "Not Selected";
                break;
            case "childThree":  this.childThree = (event.detail == "Select") ? "Selected" : "Not Selected";
                break;
        }
    }
}