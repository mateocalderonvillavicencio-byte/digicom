import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Digimon } from '../interfaces/digimon.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss']
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

  getLevel(digimon: Digimon): string {
    return digimon.levels?.map(l => l.level).join(', ') || '';
  }

  getType(digimon: Digimon): string {
    return digimon.types?.map(t => t.type).join(', ') || '';
  }

  getAttribute(digimon: Digimon): string {
    return digimon.attributes?.map(a => a.attribute).join(', ') || '';
  }

  getImageUrl(digimon: Digimon): string {
    if ('images' in digimon && (digimon as any).images?.length) {
      return (digimon as any).images[0].href;
    }
    return (digimon as any).image || '';
  }
}