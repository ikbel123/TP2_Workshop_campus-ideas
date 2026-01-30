import { Component } from '@angular/core';
import { Suggestion } from '../../models/suggestion';

@Component({
  selector: 'app-list-suggestion',
  templateUrl: './list-suggestion.component.html',
  styleUrls: ['./list-suggestion.component.css']
})
export class ListSuggestionComponent {

  // Barre de recherche (filtre titre + catégorie)
  searchText: string = '';

  suggestions: Suggestion[] = [
    {
      id: 1,
      title: 'Organiser une journée team building',
      description: "Suggestion pour organiser une journée de team building pour renforcer les liens entre les membres de l'équipe.",
      category: 'Événements',
      date: new Date('2025-01-20'),
      status: 'acceptee',
      nbLikes: 10
    },
    {
      id: 2,
      title: 'Améliorer le système de réservation',
      description: "Proposition pour améliorer la gestion des réservations en ligne avec un système de confirmation automatique.",
      category: 'Technologie',
      date: new Date('2025-01-15'),
      status: 'refusee',
      nbLikes: 0
    },
    {
      id: 3,
      title: 'Créer un système de récompenses',
      description: "Mise en place d'un programme de récompenses pour motiver les employés et reconnaître leurs efforts.",
      category: 'Ressources Humaines',
      date: new Date('2025-01-25'),
      status: 'refusee',
      nbLikes: 0
    },
    {
      id: 4,
      title: "Moderniser l'interface utilisateur",
      description: "Refonte complète de l'interface utilisateur pour une meilleure expérience utilisateur.",
      category: 'Technologie',
      date: new Date('2025-01-30'),
      status: 'en_attente',
      nbLikes: 0
    }
  ];

  favorites: Suggestion[] = [];

  like(s: Suggestion): void {
    s.nbLikes++;
  }

  addToFavorites(s: Suggestion): void {
    const exists = this.favorites.some(f => f.id === s.id);
    if (!exists) {
      this.favorites.push(s);
    }
  }

  // ✅ Filtrage par titre OU catégorie (case-insensitive)
  get filteredSuggestions(): Suggestion[] {
    const q = this.searchText.toLowerCase().trim();

    if (!q) {
      return this.suggestions;
    }

    return this.suggestions.filter(s =>
      s.title.toLowerCase().includes(q) ||
      s.category.toLowerCase().includes(q)
    );
  }

  // Badge status (affichage)
  getStatusLabel(status: string): string {
    if (status === 'acceptee') return 'ACCEPTÉE';
    if (status === 'refusee') return 'REFUSÉE';
    return 'EN ATTENTE';
  }
}
