import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  standalone: false,
})
export class CardComponent {
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
    { label: 'GitHub', url: 'https://github.com/dimitrisx26', color: '#181717' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/dimitrios-xynos', color: '#0a66c2' },
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

  getCurrentUrl(): string {
    return this.baseUrl + '/card';
  }

  readonly qrCodeUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + encodeURIComponent(this.baseUrl + '/card');

  // Wallet Pass Data (Apple Wallet / Google Wallet compatible)
  readonly walletPass = {
    description: 'Dimitrios Xynos - Digital Business Card',
    organizationName: 'Dimitrios Xynos',
    passTypeIdentifier: 'pass.com.dxynos.business-card',
    serialNumber: 'DX-2024-001',
    teamIdentifier: 'DXNYOS',
    foregroundColor: 'rgb(255,255,255)',
    backgroundColor: 'rgb(17,24,39)',
    labelColor: 'rgb(255,255,255)',
    barcode: {
      format: 'PKBarcodeFormatQR',
      message: this.baseUrl + '/card',
      messageEncoding: 'iso-8859-1',
    },
    generic: {
      headerFields: [
        { key: 'name', label: 'NAME', value: 'Dimitrios Xynos' },
      ],
      primaryFields: [
        { key: 'title', label: 'TITLE', value: 'Web Developer' },
      ],
      secondaryFields: [
        { key: 'email', label: 'Email', value: 'dxynos@outlook.com' },
        { key: 'phone', label: 'Phone', value: '+30 698 024 9001' },
      ],
      auxiliaryFields: [
        { key: 'location', label: 'Location', value: 'Athens, Greece' },
        { key: 'skills', label: 'Skills', value: 'Angular, React, Next.js, PostgreSQL, Supabase' },
      ],
      backFields: [
        {
          key: 'about',
          label: 'About',
          value: 'Full-stack web developer building responsive, scalable applications with modern technologies and clean design systems.',
        },
        {
          key: 'expertise',
          label: 'Expertise',
          value: 'JavaScript, TypeScript, Angular, React, Next.js, Astro, Node.js, HTML5, CSS3, Tailwind CSS, Bootstrap, PrimeNG, REST APIs, Supabase, PostgreSQL, Git/GitHub, Responsive Design, UI/UX Design, Agile/Scrum',
        },
        {
          key: 'links',
          label: 'Portfolio',
          value: 'Latest Project: usekivia.com | GitHub: github.com/dimitrisx26 | LinkedIn: linkedin.com/in/dimitrios-xynos',
        },
      ],
    },
  };

  showToast = false;
  private toastTimeout: any;

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

  downloadWalletPassInfo(): void {
    const passInfo = {
      instructions: 'This pass contains contact information and can be added to Apple Wallet or Google Wallet. To create a proper .pkpass file for Apple Wallet, you would need to sign this with an Apple Developer certificate.',
      passType: 'Generic Pass',
      ...this.walletPass,
      qrCodeUrl: this.qrCodeUrl,
      vCardData: this.vCardData,
    };

    const blob = new Blob([JSON.stringify(passInfo, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');

    a.href = url;
    a.download = 'business-card-pass.json';
    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);

    URL.revokeObjectURL(url);
    this.showToastMessage();
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
      navigator.clipboard.writeText(text).then(() => {
        this.showToastMessage();
      }).catch(err => {
        console.error('Failed to copy:', err);
        this.showManualCopyPrompt(text);
      });

      return;
    }

    this.showManualCopyPrompt(text);
  }

  private showManualCopyPrompt(text: string): void {
    window.prompt('Clipboard access is unavailable. Copy manually (Cmd+C, then Enter):', text);
  }
}
