import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  standalone: false,
})
export class CardComponent {
  readonly cvDownloadUrl =
    'https://drive.google.com/uc?export=download&id=1U1PRXHN7D7zvES9OS12zcB_zqtoQ4vNg';

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

  readonly faviconUrl = 'https://dxynos.com/favicon.ico';

  readonly vCardData = `BEGIN:VCARD
VERSION:4.0
N:Xynos;Dimitrios;;;
FN:Dimitrios Xynos
ORG:;
TITLE:Web Developer
TEL;TYPE=cell:+306980249001
EMAIL:dxynos@outlook.com
URL:https://dxynos.com
PHOTO;VALUE=URI:${this.faviconUrl}
ADR:;;Athens;;;
NOTE:Full-stack web developer | Angular, Astro, Next.js, PostgreSQL, Supabase
END:VCARD`;

  readonly passAssetUrl = '/assets/card.pkpass';

  getCurrentUrl(): string {
    return window.location.origin + '/card';
  }

  get walletPassUrl(): string {
    return new URL(this.passAssetUrl, window.location.origin).toString();
  }

  get qrCodeUrl(): string {
    return (
      'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' +
      encodeURIComponent(this.vCardData)
    );
  }

  showToast = false;
  toastMessage = 'Copied to clipboard!';
  private toastTimeout: any;

  downloadPass(): void {
    const a = document.createElement('a');

    a.href = this.walletPassUrl;
    a.download = 'card.pkpass';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    this.showToastMessageWithText('Apple Wallet pass downloaded');
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
    this.showToastMessageWithText('Google Wallet vCard downloaded');
  }

  openWalletPrompt(): void {
    window.location.assign(this.walletPassUrl);
  }

  showToastMessage(): void {
    this.showToastMessageWithText('Copied to clipboard!');
  }

  showToastMessageWithText(message: string): void {
    this.showToast = true;
    this.toastMessage = message;

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
          this.showToastMessageWithText('Copied to clipboard!');
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
