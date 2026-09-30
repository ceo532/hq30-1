/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import {
  CheckCircle2,
  XCircle,
  Award,
  BookOpen,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Sparkles,
  User,
  GraduationCap,
  Clock,
  HelpCircle,
  ChevronRight,
  Check,
  AlertCircle
} from 'lucide-react';

interface Question {
  cau: number;
  hoi: string;
  A: string;
  B: string;
  C: string;
  D: string;
  dapAn: 'A' | 'B' | 'C' | 'D';
}

const QUESTIONS: Question[] = [
  {"cau":1,"hoi":"Choose the word whose ending '-s' or '-es' is pronounced differently:","A":"books","B":"cats","C":"dogs","D":"maps","dapAn":"C"},
  {"cau":2,"hoi":"Choose the word whose ending '-s' or '-es' is pronounced differently:","A":"watches","B":"boxes","C":"classes","D":"goes","dapAn":"D"},
  {"cau":3,"hoi":"Choose the word whose ending '-s' or '-es' is pronounced differently:","A":"pens","B":"rulers","C":"desks","D":"bags","dapAn":"C"},
  {"cau":4,"hoi":"Choose the word whose ending '-s' or '-es' is pronounced differently:","A":"plays","B":"stops","C":"works","D":"laughs","dapAn":"A"},
  {"cau":5,"hoi":"Choose the word whose ending '-s' or '-es' is pronounced differently:","A":"houses","B":"horses","C":"faces","D":"apples","dapAn":"D"},
  {"cau":6,"hoi":"Choose the word whose ending '-s' or '-es' is pronounced differently:","A":"writes","B":"makes","C":"takes","D":"drives","dapAn":"D"},
  {"cau":7,"hoi":"Choose the word whose ending '-s' or '-es' is pronounced differently:","A":"schools","B":"yards","C":"lamps","D":"rooms","dapAn":"C"},
  {"cau":8,"hoi":"Choose the word whose ending '-s' or '-es' is pronounced differently:","A":"kisses","B":"loves","C":"misses","D":"washes","dapAn":"B"},
  {"cau":9,"hoi":"Choose the word whose ending '-s' or '-es' is pronounced differently:","A":"chairs","B":"tables","C":"boards","D":"lights","dapAn":"D"},
  {"cau":10,"hoi":"Choose the word whose ending '-s' or '-es' is pronounced differently:","A":"cups","B":"stamps","C":"tickets","D":"letters","dapAn":"D"},
  {"cau":11,"hoi":"Choose the word whose ending '-s' or '-es' is pronounced differently:","A":"brushes","B":"potatoes","C":"tomatoes","D":"heroes","dapAn":"A"},
  {"cau":12,"hoi":"Choose the word whose ending '-s' or '-es' is pronounced differently:","A":"cities","B":"countries","C":"families","D":"parks","dapAn":"D"},
  {"cau":13,"hoi":"Choose the word whose ending '-s' or '-es' is pronounced differently:","A":"cooks","B":"reads","C":"listens","D":"opens","dapAn":"A"},
  {"cau":14,"hoi":"Choose the word whose ending '-s' or '-es' is pronounced differently:","A":"wishes","B":"matches","C":"names","D":"beaches","dapAn":"C"},
  {"cau":15,"hoi":"Choose the word whose ending '-s' or '-es' is pronounced differently:","A":"bikes","B":"cars","C":"trains","D":"planes","dapAn":"A"},
  {"cau":16,"hoi":"Choose the word whose ending '-s' or '-es' is pronounced differently:","A":"trees","B":"flowers","C":"plants","D":"leaves","dapAn":"C"},
  {"cau":17,"hoi":"Choose the word whose ending '-s' or '-es' is pronounced differently:","A":"months","B":"days","C":"weeks","D":"drops","dapAn":"B"},
  {"cau":18,"hoi":"Choose the word whose ending '-s' or '-es' is pronounced differently:","A":"changes","B":"places","C":"buses","D":"boys","dapAn":"D"},
  {"cau":19,"hoi":"Choose the word whose ending '-s' or '-es' is pronounced differently:","A":"streets","B":"roads","C":"fields","D":"yards","dapAn":"A"},
  {"cau":20,"hoi":"Choose the word whose ending '-s' or '-es' is pronounced differently:","A":"students","B":"teachers","C":"farmers","D":"doctors","dapAn":"A"},
  {"cau":21,"hoi":"Choose the word whose ending '-ed' is pronounced differently:","A":"wanted","B":"needed","C":"played","D":"visited","dapAn":"C"},
  {"cau":22,"hoi":"Choose the word whose ending '-ed' is pronounced differently:","A":"watched","B":"stopped","C":"washed","D":"cleaned","dapAn":"D"},
  {"cau":23,"hoi":"Choose the word whose ending '-ed' is pronounced differently:","A":"lived","B":"loved","C":"smiled","D":"liked","dapAn":"D"},
  {"cau":24,"hoi":"Choose the word whose ending '-ed' is pronounced differently:","A":"worked","B":"cooked","C":"hoped","D":"decided","dapAn":"D"},
  {"cau":25,"hoi":"Choose the word whose ending '-ed' is pronounced differently:","A":"planted","B":"started","C":"finished","D":"invited","dapAn":"C"},
  {"cau":26,"hoi":"Choose the word whose ending '-ed' is pronounced differently:","A":"looked","B":"laughed","C":"missed","D":"arrived","dapAn":"D"},
  {"cau":27,"hoi":"Choose the word whose ending '-ed' is pronounced differently:","A":"opened","B":"closed","C":"learned","D":"talked","dapAn":"D"},
  {"cau":28,"hoi":"Choose the word whose ending '-ed' is pronounced differently:","A":"waited","B":"shouted","C":"helped","D":"painted","dapAn":"C"},
  {"cau":29,"hoi":"Choose the word whose ending '-ed' is pronounced differently:","A":"typed","B":"jumped","C":"rained","D":"walked","dapAn":"C"},
  {"cau":30,"hoi":"Choose the word whose ending '-ed' is pronounced differently:","A":"traveled","B":"listened","C":"enjoyed","D":"surfed","dapAn":"D"},
  {"cau":31,"hoi":"Choose the word whose ending '-ed' is pronounced differently:","A":"fixed","B":"relaxed","C":"mixed","D":"changed","dapAn":"D"},
  {"cau":32,"hoi":"Choose the word whose ending '-ed' is pronounced differently:","A":"stayed","B":"brushed","C":"believed","D":"moved","dapAn":"B"},
  {"cau":33,"hoi":"Choose the word whose ending '-ed' is pronounced differently:","A":"washed","B":"kissed","C":"danced","D":"happened","dapAn":"D"},
  {"cau":34,"hoi":"Choose the word whose ending '-ed' is pronounced differently:","A":"collected","B":"interested","C":"pointed","D":"asked","dapAn":"D"},
  {"cau":35,"hoi":"Choose the word whose ending '-ed' is pronounced differently:","A":"phoned","B":"called","C":"joined","D":"practiced","dapAn":"D"},
  {"cau":36,"hoi":"Choose the word whose ending '-ed' is pronounced differently:","A":"turned","B":"earned","C":"guessed","D":"burned","dapAn":"C"},
  {"cau":37,"hoi":"Choose the word whose ending '-ed' is pronounced differently:","A":"added","B":"counted","C":"ended","D":"dropped","dapAn":"D"},
  {"cau":38,"hoi":"Choose the word whose ending '-ed' is pronounced differently:","A":"dressed","B":"passed","C":"pushed","D":"smiled","dapAn":"D"},
  {"cau":39,"hoi":"Choose the word whose ending '-ed' is pronounced differently:","A":"saved","B":"robbed","C":"returned","D":"stopped","dapAn":"D"},
  {"cau":40,"hoi":"Choose the word whose ending '-ed' is pronounced differently:","A":"booked","B":"snowed","C":"cooked","D":"watched","dapAn":"B"}
];

const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbw00EtPyhylfx8ZUg3o7CFvc5g44RK17byvTJqy8kMY6grcfIVpTAT7Enu9NenGnBFR/exec";

type Screen = 'welcome' | 'quiz' | 'result';
type OptionKey = 'A' | 'B' | 'C' | 'D';

export default function App() {
  const [screen, setScreen] = useState<Screen>('welcome');
  const [selectedName, setSelectedName] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, OptionKey>>({});
  const [showSubmitConfirm, setShowSubmitConfirm] = useState<boolean>(false);
  const [resultFilter, setResultFilter] = useState<'all' | 'correct' | 'wrong'>('all');
  const [showQuestionDrawer, setShowQuestionDrawer] = useState<boolean>(false);
  
  // Track webhook submission to avoid duplicates
  const hasPostedWebhookRef = useRef<boolean>(false);

  // Calculate score
  const score = QUESTIONS.reduce((acc, q) => {
    return acc + (answers[q.cau] === q.dapAn ? 1 : 0);
  }, 0);

  const answeredCount = Object.keys(answers).length;
  const currentQuestion = QUESTIONS[currentIndex];

  // Send score to Google Sheet + Telegram when result screen appears
  useEffect(() => {
    if (screen === 'result' && !hasPostedWebhookRef.current) {
      hasPostedWebhookRef.current = true;

      const payload = {
        ten: selectedName,
        lop: "6",
        diem: score,
        tongCau: QUESTIONS.length,
        url: window.location.href
      };

      // Header: text/plain;charset=utf-8 (CRITICAL to avoid CORS preflight options block)
      fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify(payload)
      })
      .then((res) => {
        console.log('[Webhook] Điểm đã được gửi thành công:', res.status);
      })
      .catch((err) => {
        // Log to console, never block the student
        console.error('[Webhook] Gửi kết quả thất bại (không ảnh hưởng hiển thị):', err);
      });
    }
  }, [screen, selectedName, score]);

  const handleStart = () => {
    if (!selectedName) return;
    setScreen('quiz');
    setCurrentIndex(0);
    setAnswers({});
    hasPostedWebhookRef.current = false;
  };

  const handleSelectOption = (option: OptionKey) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.cau]: option
    }));
  };

  const handleNext = () => {
    if (currentIndex < QUESTIONS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Last question - check if any questions unanswered
      if (answeredCount < QUESTIONS.length) {
        setShowSubmitConfirm(true);
      } else {
        submitQuiz();
      }
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const submitQuiz = () => {
    setShowSubmitConfirm(false);
    setShowQuestionDrawer(false);
    setScreen('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRestart = () => {
    setScreen('welcome');
    setSelectedName('');
    setCurrentIndex(0);
    setAnswers({});
    hasPostedWebhookRef.current = false;
    setShowSubmitConfirm(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filtered questions in result screen
  const filteredResultQuestions = QUESTIONS.filter((q) => {
    const isCorrect = answers[q.cau] === q.dapAn;
    if (resultFilter === 'correct') return isCorrect;
    if (resultFilter === 'wrong') return !isCorrect;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-sky-50/50 to-emerald-50/40 text-slate-800 flex flex-col justify-between selection:bg-amber-200">
      
      {/* Top Banner / Navigation */}
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-amber-100 shadow-xs">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-400 to-orange-400 text-white flex items-center justify-center shadow-sm font-bold text-lg">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-bold text-slate-800 leading-tight">
                Tiếng Anh Lớp 6
              </h1>
              <p className="text-xs font-semibold text-amber-700">
                Phát âm đuôi -s/-es & -ed
              </p>
            </div>
          </div>

          {selectedName && screen !== 'welcome' && (
            <div className="flex items-center gap-2 bg-amber-100/70 border border-amber-200/80 px-3 py-1.5 rounded-full text-xs sm:text-sm font-bold text-amber-900">
              <User className="w-4 h-4 text-amber-600" />
              <span>{selectedName}</span>
            </div>
          )}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-3xl w-full mx-auto px-4 py-6 sm:py-8">
        
        {/* ===================== SCREEN 1: WELCOME & NAME SELECTION ===================== */}
        {screen === 'welcome' && (
          <div className="max-w-lg mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-amber-100 shadow-lg shadow-amber-950/5">
            {/* Friendly Greeting Card */}
            <div className="text-center mb-7">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-amber-300 via-orange-300 to-pink-300 rounded-3xl p-1 flex items-center justify-center shadow-md">
                <div className="w-full h-full bg-white rounded-[22px] flex items-center justify-center">
                  <GraduationCap className="w-10 h-10 text-amber-500" />
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Chào mừng em đến với bài tập!
              </h2>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Bài kiểm tra gồm <strong>40 câu trắc nghiệm</strong> luyện tập quy tắc phát âm đuôi <span className="text-amber-600 font-bold">-s/-es</span> và <span className="text-emerald-600 font-bold">-ed</span>.
              </p>
            </div>

            {/* Student Name Selection */}
            <div className="space-y-4 mb-7 bg-amber-50/50 p-5 rounded-2xl border border-amber-200/60">
              <label htmlFor="student-name-select" className="block text-sm font-bold text-slate-700 flex items-center gap-2">
                <User className="w-4 h-4 text-amber-600" />
                Chọn tên của em <span className="text-rose-500">*</span>
              </label>

              <div className="relative">
                <select
                  id="student-name-select"
                  value={selectedName}
                  onChange={(e) => setSelectedName(e.target.value)}
                  className="w-full appearance-none bg-white border-2 border-amber-200 focus:border-amber-500 focus:ring-3 focus:ring-amber-200 rounded-xl px-4 py-3.5 text-base font-semibold text-slate-800 transition-all cursor-pointer shadow-xs"
                >
                  <option value="" disabled>-- Vui lòng chọn tên của em --</option>
                  <option value="Hoàng Quân">Hoàng Quân</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-amber-600">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path>
                  </svg>
                </div>
              </div>

              {!selectedName && (
                <p className="text-xs text-amber-700 flex items-center gap-1.5 font-medium">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  Em hãy chọn đúng tên của mình để mở nút bắt đầu nhé!
                </p>
              )}
            </div>

            {/* Instructions */}
            <div className="mb-7 bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-2">
              <div className="font-bold text-slate-800 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                Lưu ý khi làm bài:
              </div>
              <ul className="list-disc list-inside space-y-1 pl-1">
                <li>Đọc kỹ câu hỏi và 4 đáp án A, B, C, D.</li>
                <li>Chọn 1 đáp án cho từng câu rồi bấm "Câu tiếp theo".</li>
                <li>Hệ thống sẽ tự động chấm điểm và báo kết quả sau khi nộp.</li>
              </ul>
            </div>

            {/* Start Button */}
            <button
              onClick={handleStart}
              disabled={!selectedName}
              className={`w-full py-4 px-6 rounded-2xl font-bold text-base sm:text-lg flex items-center justify-center gap-2.5 transition-all shadow-md ${
                selectedName
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-orange-500/25 active:scale-[0.99] cursor-pointer'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
              }`}
            >
              <span>Bắt đầu làm bài</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* ===================== SCREEN 2: QUIZ IN PROGRESS ===================== */}
        {screen === 'quiz' && currentQuestion && (
          <div className="space-y-4">
            {/* Top Progress Bar & Status */}
            <div className="bg-white rounded-2xl p-4 border border-amber-100 shadow-sm">
              <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-600 mb-2.5">
                <div className="flex items-center gap-2">
                  <span className="bg-amber-100 text-amber-800 px-2.5 py-1 rounded-lg">
                    Câu {currentQuestion.cau} / {QUESTIONS.length}
                  </span>
                  <span className="text-slate-400 hidden sm:inline">•</span>
                  <span className="text-slate-500 font-semibold hidden sm:inline">
                    Đã làm: {answeredCount}/{QUESTIONS.length} câu
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setShowQuestionDrawer(!showQuestionDrawer)}
                  className="text-amber-700 hover:text-amber-900 bg-amber-50 hover:bg-amber-100/80 px-2.5 py-1 rounded-lg transition-colors flex items-center gap-1 cursor-pointer font-bold"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Danh sách câu</span>
                </button>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-amber-500 to-emerald-500 h-full rounded-full transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / QUESTIONS.length) * 100}%` }}
                />
              </div>

              {/* Quick Question Drawer */}
              {showQuestionDrawer && (
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-600">Chọn nhanh câu hỏi:</span>
                    <span className="text-[11px] text-slate-500">Màu xanh = đã chọn đáp án</span>
                  </div>
                  <div className="grid grid-cols-8 sm:grid-cols-10 gap-1.5">
                    {QUESTIONS.map((q, idx) => {
                      const isAnswered = answers[q.cau] !== undefined;
                      const isCurrent = idx === currentIndex;
                      return (
                        <button
                          key={q.cau}
                          onClick={() => {
                            setCurrentIndex(idx);
                            setShowQuestionDrawer(false);
                          }}
                          className={`h-8 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                            isCurrent
                              ? 'ring-2 ring-amber-500 bg-amber-500 text-white shadow-xs'
                              : isAnswered
                              ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                        >
                          {q.cau}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Question Card */}
            <div className="bg-white rounded-3xl p-5 sm:p-7 border border-amber-100 shadow-md">
              <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full mb-3">
                <span>Câu số {currentQuestion.cau}</span>
              </div>

              {/* Exact question text without modification */}
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug mb-6">
                {currentQuestion.hoi}
              </h2>

              {/* Options A, B, C, D */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {(['A', 'B', 'C', 'D'] as OptionKey[]).map((optKey) => {
                  const isSelected = answers[currentQuestion.cau] === optKey;
                  const optionText = currentQuestion[optKey];

                  return (
                    <button
                      key={optKey}
                      type="button"
                      onClick={() => handleSelectOption(optKey)}
                      className={`relative flex items-center p-4 rounded-2xl border-2 text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'border-emerald-500 bg-emerald-50/70 shadow-sm shadow-emerald-500/10'
                          : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100/80 hover:border-slate-300'
                      }`}
                    >
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm mr-3.5 shrink-0 transition-colors ${
                          isSelected
                            ? 'bg-emerald-500 text-white shadow-xs'
                            : 'bg-white text-slate-700 border border-slate-300'
                        }`}
                      >
                        {optKey}
                      </div>

                      <div className="flex-1 text-base sm:text-lg font-semibold text-slate-900 tracking-wide">
                        {optionText}
                      </div>

                      {isSelected && (
                        <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 ml-2">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="bg-white rounded-2xl p-4 border border-amber-100 shadow-sm flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                className={`py-3 px-4 sm:px-5 rounded-xl font-bold text-sm sm:text-base flex items-center gap-1.5 transition-all ${
                  currentIndex === 0
                    ? 'text-slate-300 cursor-not-allowed'
                    : 'text-slate-700 bg-slate-100 hover:bg-slate-200 active:scale-95 cursor-pointer'
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Câu trước</span>
              </button>

              <div className="text-xs font-semibold text-slate-500 hidden sm:block">
                {answers[currentQuestion.cau] ? (
                  <span className="text-emerald-600 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Đã chọn đáp án {answers[currentQuestion.cau]}
                  </span>
                ) : (
                  <span className="text-amber-600 font-medium">Chưa chọn đáp án</span>
                )}
              </div>

              {currentIndex === QUESTIONS.length - 1 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="py-3 px-6 rounded-xl font-bold text-sm sm:text-base bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-md shadow-emerald-600/20 active:scale-95 cursor-pointer flex items-center gap-1.5"
                >
                  <span>Nộp bài</span>
                  <CheckCircle2 className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleNext}
                  className="py-3 px-5 sm:px-6 rounded-xl font-bold text-sm sm:text-base bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-md shadow-amber-500/20 active:scale-95 cursor-pointer flex items-center gap-1.5"
                >
                  <span>Câu tiếp theo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Submit Confirmation Dialog if questions remain */}
            {showSubmitConfirm && (
              <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
                <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-150">
                  <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-amber-600">
                    <AlertCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 text-center mb-2">
                    Xác nhận nộp bài?
                  </h3>
                  <p className="text-sm text-slate-600 text-center mb-6 leading-relaxed">
                    Em còn <strong className="text-rose-600 font-bold">{QUESTIONS.length - answeredCount} câu</strong> chưa chọn đáp án. Em có chắc chắn muốn nộp bài ngay bây giờ không?
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setShowSubmitConfirm(false)}
                      className="py-3 px-4 rounded-xl font-bold text-sm bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                    >
                      Kiểm tra lại
                    </button>
                    <button
                      type="button"
                      onClick={submitQuiz}
                      className="py-3 px-4 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/20 transition-colors cursor-pointer"
                    >
                      Đồng ý nộp bài
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ===================== SCREEN 3: RESULTS SCREEN ===================== */}
        {screen === 'result' && (
          <div className="space-y-6">
            {/* Score Summary Hero Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-100 shadow-xl shadow-amber-950/5 text-center relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-amber-100 rounded-full blur-2xl opacity-60 pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-emerald-100 rounded-full blur-2xl opacity-60 pointer-events-none" />

              <div className="relative z-10">
                <div className="inline-flex p-3 rounded-2xl bg-amber-100 text-amber-600 mb-4 shadow-xs">
                  <Award className="w-12 h-12" />
                </div>

                <div className="text-xs sm:text-sm font-extrabold text-amber-700 uppercase tracking-widest mb-1">
                  Kết quả bài làm của {selectedName}
                </div>

                {/* Score text: "Em đúng X/40 câu" */}
                <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight my-2">
                  Em đúng <span className="text-emerald-600">{score}</span>/{QUESTIONS.length} câu
                </h2>

                <p className="text-sm sm:text-base font-semibold text-slate-600 mt-2 max-w-md mx-auto">
                  {score >= 36 ? (
                    <span className="text-emerald-700">🎉 Xuất sắc! Em đã nắm rất vững quy tắc phát âm!</span>
                  ) : score >= 30 ? (
                    <span className="text-teal-700">🌟 Rất tốt! Em chỉ cần ôn thêm một chút ở các câu sai nhé!</span>
                  ) : score >= 20 ? (
                    <span className="text-amber-700">👍 Khá tốt! Em hãy xem lại lời giải bên dưới để cải thiện điểm nhé!</span>
                  ) : (
                    <span className="text-orange-700">💪 Cố gắng lên nhé! Xem kỹ các câu sai và làm lại để đạt điểm cao hơn!</span>
                  )}
                </p>

                {/* Score Details Bar */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-6 max-w-md mx-auto">
                  <div className="bg-emerald-50 rounded-2xl p-3 border border-emerald-100">
                    <div className="text-xs font-bold text-emerald-700">Số câu đúng</div>
                    <div className="text-xl sm:text-2xl font-black text-emerald-600">{score}</div>
                  </div>
                  <div className="bg-rose-50 rounded-2xl p-3 border border-rose-100">
                    <div className="text-xs font-bold text-rose-700">Số câu sai</div>
                    <div className="text-xl sm:text-2xl font-black text-rose-600">{QUESTIONS.length - score}</div>
                  </div>
                  <div className="bg-amber-50 rounded-2xl p-3 border border-amber-100">
                    <div className="text-xs font-bold text-amber-700">Tỉ lệ đúng</div>
                    <div className="text-xl sm:text-2xl font-black text-amber-600">
                      {Math.round((score / QUESTIONS.length) * 100)}%
                    </div>
                  </div>
                </div>

                {/* Action Restart Button */}
                <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleRestart}
                    className="w-full sm:w-auto py-3.5 px-8 rounded-xl font-bold text-base bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-md shadow-orange-500/25 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Làm lại từ đầu</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Questions Review Header & Filter */}
            <div className="bg-white rounded-2xl p-4 border border-amber-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-bold text-slate-800">
                  Chi tiết đáp án từng câu hỏi
                </h3>
                <p className="text-xs text-slate-500">
                  Xem lại đáp án đã chọn và đáp án chính xác
                </p>
              </div>

              {/* Filter tabs */}
              <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl">
                <button
                  type="button"
                  onClick={() => setResultFilter('all')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    resultFilter === 'all'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Tất cả ({QUESTIONS.length})
                </button>
                <button
                  type="button"
                  onClick={() => setResultFilter('correct')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    resultFilter === 'correct'
                      ? 'bg-white text-emerald-700 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Đúng ({score})
                </button>
                <button
                  type="button"
                  onClick={() => setResultFilter('wrong')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    resultFilter === 'wrong'
                      ? 'bg-white text-rose-700 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Sai ({QUESTIONS.length - score})
                </button>
              </div>
            </div>

            {/* Questions Review List */}
            <div className="space-y-4">
              {filteredResultQuestions.map((q) => {
                const studentAnswer = answers[q.cau];
                const isCorrect = studentAnswer === q.dapAn;

                return (
                  <div
                    key={q.cau}
                    className={`bg-white rounded-2xl p-5 border-2 shadow-xs transition-all ${
                      isCorrect ? 'border-emerald-200' : 'border-rose-200'
                    }`}
                  >
                    {/* Header: Question Number & Result Badge */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-extrabold text-sm text-slate-700">
                        Câu {q.cau}
                      </span>

                      <div className="flex items-center gap-1.5">
                        {isCorrect ? (
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            Đúng
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">
                            <XCircle className="w-3.5 h-3.5 text-rose-600" />
                            Chưa đúng
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Exact Question Text */}
                    <p className="text-base font-bold text-slate-900 mb-4">
                      {q.hoi}
                    </p>

                    {/* 4 Options Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {(['A', 'B', 'C', 'D'] as OptionKey[]).map((optKey) => {
                        const isChosen = studentAnswer === optKey;
                        const isRightAnswer = q.dapAn === optKey;

                        let style = 'border-slate-200 bg-slate-50/60 text-slate-700';
                        let badge = null;

                        if (isRightAnswer) {
                          style = 'border-emerald-500 bg-emerald-50/80 text-emerald-950 font-bold';
                          badge = (
                            <span className="text-[11px] font-extrabold text-emerald-700 bg-emerald-100/90 px-2 py-0.5 rounded-md ml-auto shrink-0 flex items-center gap-1">
                              <Check className="w-3 h-3 stroke-[3]" /> Đáp án đúng
                            </span>
                          );
                        } else if (isChosen && !isRightAnswer) {
                          style = 'border-rose-400 bg-rose-50/80 text-rose-950 font-semibold';
                          badge = (
                            <span className="text-[11px] font-extrabold text-rose-700 bg-rose-100/90 px-2 py-0.5 rounded-md ml-auto shrink-0 flex items-center gap-1">
                              <XCircle className="w-3 h-3" /> Em đã chọn
                            </span>
                          );
                        }

                        return (
                          <div
                            key={optKey}
                            className={`p-3 rounded-xl border flex items-center gap-2.5 ${style}`}
                          >
                            <span
                              className={`w-7 h-7 rounded-lg text-xs font-extrabold flex items-center justify-center shrink-0 ${
                                isRightAnswer
                                  ? 'bg-emerald-600 text-white'
                                  : isChosen
                                  ? 'bg-rose-600 text-white'
                                  : 'bg-white border border-slate-300 text-slate-600'
                              }`}
                            >
                              {optKey}
                            </span>
                            <span className="text-sm font-medium">{q[optKey]}</span>
                            {badge}
                          </div>
                        );
                      })}
                    </div>

                    {!studentAnswer && (
                      <div className="mt-2.5 text-xs text-amber-700 font-medium">
                        * Em đã bỏ trống câu này khi nộp bài.
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom Restart Button */}
            <div className="py-4 text-center">
              <button
                type="button"
                onClick={handleRestart}
                className="py-3 px-8 rounded-xl font-bold text-base bg-amber-500 hover:bg-amber-600 text-white shadow-md active:scale-95 transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Làm lại từ đầu</span>
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-8 border-t border-amber-100/80 bg-white/60 py-4 text-center text-xs text-slate-500 font-medium">
        Luyện tập trắc nghiệm Tiếng Anh Lớp 6 • Chuyên đề Phát âm
      </footer>
    </div>
  );
}
