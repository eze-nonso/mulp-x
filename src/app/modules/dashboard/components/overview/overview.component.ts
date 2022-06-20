import {Component} from '@angular/core';
import * as Highcharts from 'highcharts';
import {DatePipe} from "@angular/common";

Highcharts.setOptions({
  lang: {
    thousandsSep: ','
  }
});

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  public Highcharts: typeof Highcharts = Highcharts;
  public chartOptions: Highcharts.Options = {
    colors: ['#7D5C44'],
    series: [{
      showInLegend: false,
      data: [45000, 30000, 48000, 60000, 70000, 48000],
      type: 'spline'
    }],
    title: undefined,
    credits: {
      enabled: false
    },
    yAxis: {
      title: {
        text: undefined
      }, labels: {
        style: {
          color: '#2DBC55',
          'font-size': '10px'
        },
        format: '<span>&#8358;{value:,.0f}</span>'
      }
    },
    tooltip: {
      formatter: function () {
        const style = "color: #2DBC55; 'font-weight': 500; 'font-size': 7px";
        const styleSub = "color: #909090; 'font-weight': 400; 'font-size': 4px; 'text-align': right";
        return `<strong style="${style}">` + `${Highcharts.numberFormat(Number(this.y), 0, '', ',')}NGN` + '</strong><br>' + `<span style="${styleSub}">` + (new Date().toLocaleTimeString(undefined, {
          hour: 'numeric',
          minute: 'numeric'
        })) + '</span>';
      }
    },
    xAxis: {
      tickInterval: 1,
      title: undefined,
      labels: {enabled: false}
    }
  };
  public intervalOptions = [{label: 'Weekly', value: 'weekly'}, {label: 'Daily', value: 'daily'}, {
    label: 'Monthly',
    value: 'monthly'
  }];
  public selectedInterval = this.intervalOptions[0];
  public chartData: { [key: string]: number[] } = {
    weekly: [45000, 30000, 48000, 60000, 70000, 48000],
    daily: [40000, 39000, 40000, 41000, 45000, 48000],
    monthly: [60000, 75000, 60000, 82000, 75000, 80000]
  };
  public updateFlag = false;

  constructor(private _datePipe: DatePipe) {
  }

  public updateSeries(): void {
    if (!this.selectedInterval) {
      return;
    }
    this.chartOptions.series = [{
      showInLegend: false,
      type: 'spline',
      data: this.chartData[this.selectedInterval.value]
    }];
    this.updateFlag = true;
  }
}

