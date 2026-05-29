import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButton,
  IonIcon,
  IonSpinner,
  IonBackButton
} from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Digimon } from '../interfaces/digimon.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonButton,
    IonIcon,
    IonSpinner,
    IonBackButton
  ]
})
export class DetailPage implements OnInit {
  digimon: Digimon | null = null;
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.loadDigimon(+id);
      }
    });
  }

  loadDigimon(id: number): void {
    this.isLoading = true;
    this.dataService.getDigimonById(id).subscribe({
      next: (data) => {
        this.digimon = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading Digimon:', error);
        this.isLoading = false;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/home']);
  }

  getLevel(digimon: Digimon | null): string {
    return digimon?.levels?.map(l => l.level).join(', ') || 'N/A';
  }
}