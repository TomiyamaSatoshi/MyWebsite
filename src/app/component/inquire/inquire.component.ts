import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { InquireService } from 'src/app/service/inquire.service';
import { AppError } from 'src/app/common/app-error';

@Component({
  selector: 'app-inquire',
  templateUrl: './inquire.component.html',
  styleUrls: ['./inquire.component.scss']
})

export class InquireComponent implements OnInit {

  form = this.fb.group({
    name: ['', Validators.required],
    mailAddress: ['', [Validators.required]],
    contactTitle: ['', [Validators.required]],
    contactContent: ['', [Validators.required]]
  });

  get name() { return this.form.get("name"); }
  get mailAddress() { return this.form.get("mailAddress"); }
  get contactTitle() { return this.form.get("contactTitle"); }
  get contactContent() { return this.form.get("contactContent"); }

  constructor(
    private router: Router,
    private inquireService: InquireService, 
    private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const form = this.form;
    console.log('contact.value: ' + JSON.stringify(form.value));

    this.inquireService.sendMessage(form.value).subscribe(
      (data) => {
        console.log('SUCCESS: ' + JSON.stringify(data));
        alert('メッセージを送信しました!');
        this.router.navigate(['/inquire']);
      },
      (error: AppError) => {
        console.log('FAILED: ' + JSON.stringify(error));
        alert('メッセージの送信に失敗しました。ネットワークを確認の上、もう一度お試しください。');
      }
    )
  }
}
