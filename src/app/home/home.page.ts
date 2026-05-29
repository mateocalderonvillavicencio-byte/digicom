import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonList, 
  IonItem, 
  IonLabel, 
  IonThumbnail, 
  IonIcon, 
  IonSearchbar,
  IonRefresher,
  IonRefresherContent,
  IonSpinner
} from '@ionic/angular/standalone';
import { DataService } from '../services/data.service';
import { Digimon } from '../interfaces/digimon.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonThumbnail,
    IonIcon,
    IonSearchbar,
    IonRefresher,
    IonRefresherContent,
    IonSpinner
  ]
})
export class HomePage implements OnInit {
  digimons: Digimon[] = [];
  filteredDigimons: Digimon[] = [];
  isLoading: boolean = true;
  searchTerm: string = '';

  constructor(
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadDigimons();
  }

  loadDigimons(): void {
    this.isLoading = true;
    this.dataService.getDigimons().subscribe({
      next: (data) => {
        this.digimons = data;
        this.filteredDigimons = [...data];
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading Digimons:', error);
        this.isLoading = false;
      }
    });
  }

  onSearch(event: any): void {
    const searchTerm = event.target.value ? event.target.value.toLowerCase() : '';
    this.filteredDigimons = this.digimons.filter(digimon =>
      digimon.name.toLowerCase().includes(searchTerm)
    );
  }

  goToDetail(id: number): void {
    this.router.navigate(['/detail', id]);
  }

  doRefresh(event: any): void {
    this.dataService.getDigimons().subscribe({
      next: (data) => {
        this.digimons = data;
        this.filteredDigimons = [...data];
        this.searchTerm = '';
        event.target.complete();
      },
      error: (error) => {
        console.error('Error refreshing:', error);
        event.target.complete();
      }
    });
  }

  getLevel(digimon: Digimon): string {
    return digimon.levels?.map(l => l.level).join(', ') || 'N/A';
  }
}