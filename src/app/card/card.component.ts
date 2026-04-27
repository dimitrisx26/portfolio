import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  standalone: false,
})
export class CardComponent implements OnInit {
  readonly profile = {
    name: 'Dimitrios Xynos',
    title: 'Web Developer',
    location: 'Athens, Greece',
    avatar: '/assets/images/photo2.jpg',
    bio: 'Full-stack web developer building responsive, scalable applications with modern technologies and clean design systems.',
  };

  readonly contact = {
    email: 'dxynos@outlook.com',
    phone: '+306980249001',
    website: 'https://dxynos.com',
    github: 'https://github.com/dimitrisx26',
    linkedin: 'https://linkedin.com/in/dimitrios-xynos',
    location: 'Athens, Greece',
  };

  readonly skills = [
    'JavaScript',
    'TypeScript',
    'Angular',
    'React',
    'Next.js',
    'Astro',
    'Node.js',
    'HTML5',
    'CSS3/SASS',
    'Tailwind CSS',
    'Bootstrap',
    'PrimeNG',
    'REST APIs',
    'Supabase',
    'PostgreSQL',
    'Git/GitHub',
    'Responsive Design',
    'UI/UX Design',
    'Agile/Scrum',
  ];

  readonly links = [
    { label: 'Latest Project', url: 'https://usekivia.com', color: '#2458f5' },
    { label: 'View Portfolio', url: 'https://dxynos.com', color: '#1f5fff' },
    {
      label: 'GitHub',
      url: 'https://github.com/dimitrisx26',
      color: '#181717',
    },
    {
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/dimitrios-xynos',
      color: '#0a66c2',
    },
    { label: 'Contact', url: 'mailto:dxynos@outlook.com', color: '#007acc' },
  ];

  // Generate vCard format for contact saving
  readonly vCardData = `BEGIN:VCARD
VERSION:4.0
N:Xynos;Dimitrios;;;
FN:Dimitrios Xynos
ORG:;
TITLE:Web Developer
TEL;TYPE=cell:+306980249001
EMAIL:dxynos@outlook.com
URL:https://dxynos.com
ADR:;;Athens;;;
NOTE:Full-stack web developer | Angular, React, Next.js, PostgreSQL, Supabase
END:VCARD`;

  readonly baseUrl = 'https://dxynos.com';
  readonly walletPromptUrl = this.baseUrl + '/card?addWallet=1';

  getCurrentUrl(): string {
    return this.baseUrl + '/card';
  }

  readonly qrCodeUrl =
    'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' +
    encodeURIComponent(this.walletPromptUrl);

  showToast = false;
  private toastTimeout: any;

  ngOnInit(): void {
    const params = new URLSearchParams(window.location.search);
    if (params.get('addWallet') === '1') {
      this.openWalletPrompt();
    }
  }

  downloadVCard(): void {
    const blob = new Blob([this.vCardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');

    a.href = url;
    a.download = 'dimitrios-xynos-contact.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(url);
    this.showToastMessage();
  }

  async openWalletPrompt(): Promise<void> {
    const shouldContinue = window.confirm(
      'Add Dimitrios Xynos card to your wallet/contact app now?',
    );

    if (!shouldContinue) {
      return;
    }

    await this.addToWallet();
  }

  private async addToWallet(): Promise<void> {
    const file = new File([this.vCardData], 'dimitrios-xynos-contact.vcf', {
      type: 'text/vcard',
    });

    const nav = navigator as Navigator & {
      canShare?: (data?: ShareData) => boolean;
    };

    try {
      if (nav.share && nav.canShare?.({ files: [file] })) {
        await nav.share({
          title: 'Dimitrios Xynos - Digital Card',
          text: 'Add this digital card to your wallet/contact app.',
          files: [file],
          url: this.getCurrentUrl(),
        });
        this.showToastMessage();
        return;
      }
    } catch (err) {
      // If user cancels share, stop silently. Otherwise fallback to vCard download.
      if ((err as Error)?.name === 'AbortError') {
        return;
      }
    }

    // Fallback for browsers without file sharing support.
    this.downloadVCard();
  }

  showToastMessage(): void {
    this.showToast = true;

    if (this.toastTimeout) {
      clearTimeout(this.toastTimeout);
    }

    this.toastTimeout = setTimeout(() => {
      this.showToast = false;
    }, 2000);
  }

  copyToClipboard(text: string): void {
    // Clipboard API requires a secure context; gracefully fall back when unavailable.
    if (navigator.clipboard?.writeText && window.isSecureContext) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          this.showToastMessage();
        })
        .catch((err) => {
          console.error('Failed to copy:', err);
          this.showManualCopyPrompt(text);
        });

      return;
    }

    this.showManualCopyPrompt(text);
  }

  private showManualCopyPrompt(text: string): void {
    window.prompt(
      'Clipboard access is unavailable. Copy manually (Cmd+C, then Enter):',
      text,
    );
  }
}
