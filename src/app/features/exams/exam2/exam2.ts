import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';

interface question {
  id: number;
  correctAnswer: number;
  question: string;
  options: string[];
}

@Component({
  selector: 'app-exam2',
  imports: [ReactiveFormsModule],
  templateUrl: './exam2.html',
  styleUrl: './exam2.css',
})
export class Exam2 {
  private fb = inject(FormBuilder);
  private authServe = inject(AuthService);
  lessonId = 2;

  // questions
  questions: question[] = [
    {
      id: 1,
      correctAnswer: 3,
      question: 'تعريف التجويد لغةً',
      options: ['الدعاء', 'حَقٌّ يَجِب في مال خاص', 'الفهم', 'التحسين والاتقان'],
    },
    {
      id: 2,
      correctAnswer: 1,
      question: 'حكم تعلم التجويد',
      options: ['فرض عين', 'فرض كفاية', 'مستحب', 'جائز'],
    },
    {
      id: 3,
      correctAnswer: 0,
      question: 'حكم الاستعاذة',
      options: ['مستحب', 'فرض كفاية', 'فرض عين', 'جميع ما سبق'],
    },
    {
      id: 4,
      correctAnswer: 2,
      question: 'أقسام اللحن في القراءة',
      options: ['3', '4', '2', '5'],
    },
  ];

  examForm: FormGroup = this.fb.group({});
  score = 0;
  examprog = 0;
  submitted = false;
  showResButton = false;
  viewResultDiv = false;

  ngOnInit(): void {
    this.questions.forEach((q) => {
      this.examForm.addControl(
        q.id.toString(),
        this.fb.control<number | null>(null, [Validators.required])
      );
    });
  }

  // submiting answers
  submitExam() {
    if (this.submitted) {
      return;
    }
    if (this.examForm.invalid) {
      console.log('exam invalid');
      alert('يرجى الإجابة على جميع الأسئلة أولاً..');
      return;
    }

    this.submitted = true;
    this.score = 0;

    this.questions.forEach((q) => {
      const answers = this.examForm.get(q.id.toString())?.value;
      if (answers === q.correctAnswer) {
        this.score++;
      }
    });

    // examDone.disable
    this.examForm.disable();

    //result btn
    this.showResButton = true;

    // save exams degree in user data
    const result = {
      lessonId: this.lessonId,
      score: this.score,
      total: this.questions.length,
      date: new Date().toISOString(),
    };

    this.authServe.saveExamDegree(result).subscribe({
      next: () => {
        console.log('exam saved successfully');
      },
      error: (err) => {
        console.error('error saving exam', err);
      },
    });
  }

  // view Result button
  viewResult() {
    this.viewResultDiv = true;
  }
}
