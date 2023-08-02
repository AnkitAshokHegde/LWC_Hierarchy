import { LightningElement, api } from 'lwc';

export default class ChildComp extends LightningElement {
    @api btnColor = "neutral";
    @api selectionStatus = "Select";
    @api childName;

    @api childReset(){
        this.selectionStatus = "Select";
        this.btnColor = "neutral";
    }

    handleOnclick(event) {

        const event1 = new CustomEvent('childclick',
            {
                bubbles: true,
                composed: true,
                detail: this.selectionStatus,
            }
        );
        this.dispatchEvent(event1);

        if (this.selectionStatus == "Select") {
            this.btnColor = "destructive";
            this.selectionStatus = "Deselect";
        }
        else {
            this.btnColor = "neutral";
            this.selectionStatus = "Select";
        }
    }

}