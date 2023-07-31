import { LightningElement } from 'lwc';

export default class HelloForEach extends LightningElement {
    contacts = [
        {
            Id: 1,
            Name: "Amy Taylor",
            Title: "VP Of Engineering",
        }
        {
            Id: 2,
            Name: "Michael Jones",
            Title: "Vp of Sales",
        }
    ]
}