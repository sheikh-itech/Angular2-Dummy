import { Component } from '@angular/core';

@Component({
  selector: 'info-alert',
  template: `<div class="infoAlert" *ngIf="showInfoAlert">
                <span class="closebtn" (click)="changeState()">&times;</span> 
                <strong>Danger!</strong> Indicates a dangerous or potentially negative action.
            </div>`,
  styles: [`
            .infoAlert {
                padding: 20px;
                background-color: #f44336;
                color: white;
            }

            .closebtn {
                margin-left: 15px;
                color: white;
                font-weight: bold;
                float: right;
                font-size: 22px;
                line-height: 20px;
                cursor: pointer;
                transition: 0.3s;
            }

            .closebtn:hover {
                color: black;
            }`
    ]
})
export class InfoAlertComponent {}
