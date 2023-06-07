import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    Highcharts.chart({
      chart: {
        type: 'bar',
        renderTo: 'myChart',
        backgroundColor: '#333333',
        style: {
          color: '#ffffff'
        }
      },
      title: {
        text: 'Statistics'
      },
      xAxis: [{
        categories: ['Clients', 'Employees', 'Products'],
        labels: {
          style: {
            color: '#ffffff'
          }
        }
      }, {
        categories: ['2021', '2022', '2023'],
        labels: {
          style: {
            color: '#ffffff'
          }
        }
      }],
      yAxis: {
        title: {
          text: 'Count',
          style: {
            color: '#ffffff'
          }
        },
        labels: {
          style: {
            color: '#ffffff'
          }
        }
      },
      series: [{
        name: 'Clients',
        type: 'bar',
        data: [100, 50, 300],
        xAxis: 1,
        dataLabels: {
          enabled: true,
          format: '{y}',
          color: '#ffffff'
        }
      }, {
        name: 'Employees',
        type: 'bar',
        data: [400, 120, 500],
        xAxis: 1,
        dataLabels: {
          enabled: true,
          format: '{y}',
          color: '#ffffff'
        }
      }, {
        name: 'Products',
        type: 'bar',
        data: [120, 300, 700],
        xAxis: 1,
        dataLabels: {
          enabled: true,
          format: '{y}',
          color: '#ffffff'
        }
      }]
    });
  }
}
