import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { WrTableMaterialDataSource } from './wr-table-material-datasource';

@Component({
  selector: 'app-wr-table-material',
  templateUrl: './wr-table-material.component.html',
  styleUrls: ['./wr-table-material.component.css']
})
export class WrTableMaterialComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: WrTableMaterialDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new WrTableMaterialDataSource(this.paginator, this.sort);
  }
}
