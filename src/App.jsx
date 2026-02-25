import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  CheckCircle, 
  User, 
  ShoppingBag,
  Info,
  Plus,
  Minus,
  QrCode,
  Upload,
  Download,
  Phone,
  Mail,
  StickyNote,
  Hash
} from 'lucide-react';

// --- VIEW: REGISTRATION FORM ---
const SelectionView = ({ formData, setFormData, handleInitialSubmit, handleRoleChange, loading, pricingOptions }) => (
  <div className="max-w-xl mx-auto animate-in fade-in duration-500">
    <header className="text-center py-10 mb-8 rounded-3xl bg-gradient-to-br from-pink-500 via-purple-500 to-orange-400 text-white shadow-xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-4 left-10 w-20 h-20 rounded-full bg-yellow-300 blur-xl"></div>
        <div className="absolute bottom-4 right-10 w-32 h-32 rounded-full bg-blue-300 blur-xl"></div>
      </div>
      <h1 className="text-5xl font-black tracking-tighter mb-2">GOLGAPPA JUNCTION</h1>
      <p className="text-xl font-medium opacity-90">Holi Mela Stall @ College Fest</p>
      <div className="mt-4 inline-block bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-sm font-bold">
        ✨ Pre-order & Save Big!
      </div>
    </header>

    <form onSubmit={handleInitialSubmit} className="space-y-8 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
      <section>
        <label className="flex items-center gap-2 text-lg font-bold text-gray-800 mb-4">
          <ShoppingBag className="text-pink-500" size={20} />
          Pick Your Pack
        </label>
        <div className="grid grid-cols-2 gap-3">
          {pricingOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setFormData({ ...formData, option: opt.label, price: opt.price })}
              className={`p-4 border-2 rounded-2xl text-left transition-all duration-200 group ${
                formData.option === opt.label 
                ? 'border-pink-500 bg-pink-50 ring-4 ring-pink-100' 
                : 'border-gray-100 hover:border-pink-200 hover:bg-gray-50'
              }`}
            >
              <div className="flex justify-between items-start">
                <span className={`text-sm font-bold ${formData.option === opt.label ? 'text-pink-600' : 'text-gray-500'}`}>
                  {opt.label}
                </span>
                {formData.option === opt.label && <CheckCircle size={16} className="text-pink-500" />}
              </div>
              <div className="text-2xl font-black text-gray-800">₹{opt.price}</div>
              <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider">{opt.sub}</div>
            </button>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100">
          <div className="space-y-0.5">
            <span className="text-sm font-bold text-gray-800 block">Number of Plates</span>
            <span className="text-xs text-gray-400 font-medium">₹{formData.price} per plate</span>
          </div>
          <div className="flex items-center gap-4">
            <button 
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, qty: Math.max(1, prev.qty - 1) }))}
              className="w-10 h-10 flex items-center justify-center bg-white rounded-xl border border-gray-200 shadow-sm hover:border-pink-400 text-gray-600 transition-colors"
            >
              <Minus size={18} />
            </button>
            <span className="text-xl font-black text-gray-800 min-w-[20px] text-center">{formData.qty}</span>
            <button 
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, qty: prev.qty + 1 }))}
              className="w-10 h-10 flex items-center justify-center bg-white rounded-xl border border-gray-200 shadow-sm hover:border-pink-400 text-gray-600 transition-colors"
            >
              <Plus size={18} />
            </button>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <label className="flex items-center gap-2 text-lg font-bold text-gray-800 mb-2">
          <User className="text-orange-500" size={20} />
          User Identity
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {['student', 'teacher', 'member', 'outsider'].map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => handleRoleChange(r)}
              className={`py-2 px-1 text-xs font-bold uppercase rounded-lg border-2 transition-all ${
                formData.role === r 
                ? 'bg-orange-500 border-orange-500 text-white' 
                : 'bg-white border-gray-100 text-gray-400 hover:bg-gray-50'
              }`}
            >
              {r === 'member' ? 'Cllg Member' : r}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
          <div className="space-y-1">
            <span className="text-xs font-bold text-gray-400 ml-1">Full Name</span>
            <input 
              required
              type="text" 
              value={formData.name}
              placeholder="Enter Name"
              className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-400 outline-none transition-all bg-gray-50 focus:bg-white"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div className="space-y-1">
            <span className="text-xs font-bold text-gray-400 ml-1">University</span>
            <select 
              className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-400 outline-none bg-gray-50"
              value={formData.university}
              onChange={(e) => setFormData({...formData, university: e.target.value})}
            >
              <option value="none">None / Other</option>
              <option value="ppu">PPU (Patliputra)</option>
              <option value="aku">AKU (Aryabhatta)</option>
              <option value="aima">AIMA</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold text-gray-400 ml-1 flex items-center gap-1">
              <Phone size={10}/> Phone Number
            </span>
            <input 
              required
              type="tel" 
              value={formData.phone}
              placeholder="10-digit number"
              pattern="[0-9]{10}"
              maxLength="10"
              className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-400 outline-none bg-gray-50"
              onChange={(e) => {
                const val = e.target.value.replace(/\D/g, ''); 
                setFormData({...formData, phone: val});
              }}
            />
          </div>
          <div className="space-y-1">
            <span className="text-xs font-bold text-gray-400 ml-1 flex items-center gap-1">
              <Mail size={10}/> Email ID
            </span>
            <input 
              required
              type="email" 
              value={formData.email}
              placeholder="name@email.com"
              className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-400 outline-none bg-gray-50"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold text-gray-400 ml-1">Course</span>
            {formData.role === 'student' ? (
              <select 
                className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-400 outline-none bg-gray-50"
                value={['BBA', 'BCA', 'BScIT', 'BCOM', 'PGDM', 'MCA', 'MBA'].includes(formData.course) ? formData.course : (formData.course === 'NA' ? 'NA' : 'Other')}
                onChange={(e) => setFormData({...formData, course: e.target.value === 'Other' ? '' : e.target.value})}
              >
                <option value="">Select Course</option>
                <option value="BBA">BBA</option>
                <option value="BCA">BCA</option>
                <option value="BScIT">BScIT</option>
                <option value="BCOM">BCOM</option>
                <option value="PGDM">PGDM</option>
                <option value="MCA">MCA</option>
                <option value="MBA">MBA</option>
                <option value="Other">Other</option>
              </select>
            ) : (
              <input type="text" value="NA" disabled className="w-full p-3 rounded-xl border border-gray-200 bg-gray-100 text-gray-400" />
            )}
          </div>

          <div className="space-y-1">
            <span className="text-xs font-bold text-gray-400 ml-1">ID Number</span>
            <input 
              type="text" 
              placeholder="ID NUMBER"
              value={formData.id}
              disabled={formData.role !== 'student'}
              className={`w-full p-3 rounded-xl border border-gray-200 outline-none transition-all ${
                formData.role !== 'student' ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-50 focus:bg-white focus:ring-2 focus:ring-pink-400'
              }`}
              onChange={(e) => setFormData({...formData, id: e.target.value})}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold text-gray-400 ml-1">Batch</span>
            {formData.role === 'student' ? (
              <select 
                className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-400 outline-none bg-gray-50"
                value={formData.batch}
                onChange={(e) => setFormData({...formData, batch: e.target.value})}
              >
                <option value="">Select Batch</option>
                <option value="B1">B1</option>
                <option value="B2">B2</option>
                <option value="B3">B3</option>
              </select>
            ) : (
              <input type="text" value="NA" disabled className="w-full p-3 rounded-xl border border-gray-200 bg-gray-100 text-gray-400" />
            )}
          </div>

          <div className="space-y-1">
            <span className="text-xs font-bold text-gray-400 ml-1">Year / Semester</span>
            {formData.role === 'student' ? (
              <select 
                className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-400 outline-none bg-gray-50"
                value={formData.yearSem}
                onChange={(e) => setFormData({...formData, yearSem: e.target.value})}
              >
                <option value="">Select Year/Sem</option>
                <option value="1st yr(1st/2nd sm)">1st yr(1st/2nd sm)</option>
                <option value="2nd yr(3rd/4th sm)">2nd yr(3rd/4th sm)</option>
                <option value="3rd yr(5th/6th sm)">3rd yr(5th/6th sm)</option>
              </select>
            ) : (
              <input type="text" value="NA" disabled className="w-full p-3 rounded-xl border border-gray-200 bg-gray-100 text-gray-400" />
            )}
          </div>
        </div>

        <div className="space-y-1">
          <span className="text-xs font-bold text-gray-400 ml-1 flex items-center gap-1">
            <StickyNote size={10}/> Order Note (Optional)
          </span>
          <textarea 
            value={formData.note}
            placeholder="Special instructions (e.g., extra spicy, no onion)"
            className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-400 outline-none bg-gray-50 min-h-[80px]"
            onChange={(e) => setFormData({...formData, note: e.target.value})}
          />
        </div>

        {formData.role !== 'student' && formData.role !== '' && (
          <p className="text-[10px] text-orange-600 font-bold flex items-center gap-1 bg-orange-50 p-2 rounded-lg">
            <span className="flex-shrink-0"><Info size={12} /></span> Non-students: Fields automatically set to NA for records.
          </p>
        )}
      </section>

      <button 
        type="submit"
        className="w-full group relative flex items-center justify-center gap-2 text-white font-black py-4 rounded-2xl text-xl shadow-lg transition-all bg-gradient-to-r from-pink-600 to-orange-500 hover:shadow-pink-200 hover:-translate-y-1"
      >
        PROCEED TO PAYMENT - ₹{formData.price * formData.qty}
        <Zap size={20} className="fill-current group-hover:animate-bounce" />
      </button>
    </form>
  </div>
);

// --- VIEW: PAYMENT ---
const PaymentView = ({ formData, setFormData, onPaymentComplete, loading }) => {
  const [file, setFile] = useState(null);
  const totalAmount = formData.price * formData.qty;

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFile({
          base64: reader.result.split(',')[1],
          name: selectedFile.name,
          type: selectedFile.type
        });
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <div className="max-w-md mx-auto animate-in fade-in duration-500">
      <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 text-center">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-pink-100 text-pink-600 rounded-full mb-4">
            <QrCode size={24} />
          </div>
          <h2 className="text-2xl font-black text-gray-800">Scan to Pay</h2>
          <p className="text-gray-500">Total Amount: <span className="text-pink-600 font-bold">₹{totalAmount}</span></p>
        </div>

        <div className="bg-gray-100 p-4 rounded-2xl mb-6 flex justify-center border-2 border-dashed border-gray-200">
           <img 
            src="/qr.jpeg"
            alt="Payment QR"
            className="w-48 h-48"
           />
        </div>

        <section className="space-y-4 text-left">
          {/* New Transaction ID Field */}
          <div className="space-y-1">
            <span className="text-xs font-bold text-gray-400 ml-1 flex items-center gap-1">
              <Hash size={10}/> UPI Transaction ID
            </span>
            <input 
              required
              type="text" 
              value={formData.transactionId}
              placeholder="Enter 12-digit Ref No."
              className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-400 outline-none bg-gray-50"
              onChange={(e) => setFormData({...formData, transactionId: e.target.value})}
            />
          </div>

          <label className="block text-sm font-bold text-gray-700 ml-1">Upload Payment Screenshot</label>
          <div className="relative group">
            <input 
              type="file" 
              accept="image/*"
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            />
            <div className={`p-4 border-2 border-dashed rounded-xl flex items-center justify-center gap-2 transition-all ${file ? 'border-green-400 bg-green-50' : 'border-gray-200 group-hover:border-pink-400'}`}>
              <Upload size={18} className={file ? 'text-green-600' : 'text-gray-400'} />
              <span className="text-sm font-medium text-gray-600">
                {file ? file.name : 'Select Screenshot'}
              </span>
            </div>
          </div>
        </section>

        <button 
          onClick={() => onPaymentComplete(file)}
          disabled={!file || !formData.transactionId || loading}
          className={`w-full mt-8 flex items-center justify-center gap-2 text-white font-black py-4 rounded-2xl text-xl transition-all ${
            !file || !formData.transactionId || loading ? 'bg-gray-300' : 'bg-gray-900 hover:bg-black shadow-lg'
          }`}
        >
          {loading ? 'UPLOADING...' : 'CONFIRM ORDER'}
        </button>
      </div>
    </div>
  );
};

// --- VIEW: SUCCESS ---
const SuccessView = ({ formData, orderId }) => {
  // Fixed mobile download/preview logic using Blob and simulated click
  const downloadReceipt = () => {
    const receiptHtml = `
      <html>
        <head>
          <title>Receipt - ${orderId}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { font-family: sans-serif; padding: 20px; color: #333; line-height: 1.4; background: #fffcf5; }
            .receipt-card { max-width: 350px; margin: auto; border: 2px solid #eee; padding: 20px; border-radius: 15px; background: white; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
            .header { text-align: center; border-bottom: 2px dashed #eee; padding-bottom: 15px; margin-bottom: 15px; }
            .title { font-size: 20px; font-weight: 900; color: #db2777; margin: 0; }
            .item { display: flex; justify-content: space-between; margin: 8px 0; font-weight: bold; font-size: 13px; }
            .label { color: #666; }
            .value { text-align: right; }
            .footer { text-align: center; margin-top: 20px; font-size: 11px; color: #999; }
            @media print { body { padding: 0; } .receipt-card { border: none; box-shadow: none; } }
          </style>
        </head>
        <body>
          <div class="receipt-card">
            <div class="header">
              <p class="title">GOLGAPPA JUNCTION</p>
              <p style="margin:5px 0; font-size:12px;">Holi Mela @ College Fest</p>
            </div>
            <div class="item"><span class="label">Order ID:</span><span class="value">${orderId}</span></div>
            <div class="item"><span class="label">Customer:</span><span class="value">${formData.name}</span></div>
            <div class="item"><span class="label">Phone:</span><span class="value">${formData.phone}</span></div>
            <div class="item"><span class="label">Txn ID:</span><span class="value">${formData.transactionId}</span></div>
            <div class="item"><span class="label">Pack:</span><span class="value">${formData.option}</span></div>
            <div class="item"><span class="label">Qty:</span><span class="value">${formData.qty} Plates</span></div>
            <div class="item" style="font-size: 16px; margin-top: 15px; border-top: 1px solid #eee; padding-top: 10px;">
              <span class="label">Paid:</span><span class="value" style="color: #16a34a;">₹${formData.price * formData.qty}</span>
            </div>
            ${formData.note ? `<div class="item" style="border-top:1px solid #eee; padding-top:5px;"><span class="label">Note:</span><span class="value">${formData.note}</span></div>` : ''}
            <div class="footer">
              <p>Keep this screenshot/PDF for pickup.</p>
              <p>${new Date().toLocaleString()}</p>
            </div>
          </div>
        </body>
      </html>
    `;
    
    const blob = new Blob([receiptHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const win = window.open(url, '_blank');
    if (win) {
        win.focus();
        // Trigger print after load for PDF saving on mobile
        win.onload = () => {
            win.print();
        };
    } else {
        alert("Please allow popups to view receipt.");
    }
  };

  return (
    <div className="max-w-md mx-auto text-center animate-in zoom-in duration-500">
      <div className="bg-white p-10 rounded-3xl shadow-2xl border-t-8 border-green-500">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={48} className="text-green-600" />
        </div>
        <h2 className="text-3xl font-black text-gray-800 mb-2">Order Confirmed!</h2>
        <p className="text-gray-500 mb-6">Yay! Your {formData.qty > 1 ? `${formData.qty} plates of ` : ''}{formData.option} are reserved. Preview receipt below.</p>
        
        <div className="bg-gray-50 rounded-2xl p-4 text-left space-y-2 mb-8 border border-gray-100">
          <div className="flex justify-between text-xs font-bold"><span className="text-gray-400">Order ID:</span><span className="text-gray-700">{orderId}</span></div>
          <div className="flex justify-between text-xs font-bold"><span className="text-gray-400">Name:</span><span className="text-gray-700">{formData.name}</span></div>
          <div className="flex justify-between text-xs font-bold"><span className="text-gray-400">Total plates:</span><span className="text-gray-700">{formData.qty}</span></div>
          <div className="flex justify-between text-xs font-bold"><span className="text-gray-400">Amount:</span><span className="text-green-600 font-black text-sm">₹{formData.price * formData.qty}</span></div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button 
            onClick={downloadReceipt}
            className="flex items-center justify-center gap-2 bg-pink-600 text-white py-4 rounded-xl font-bold hover:bg-pink-700 transition-colors shadow-md"
          >
            <Download size={18} /> PREVIEW PDF
          </button>
          <button 
            onClick={() => window.location.reload()}
            className="bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors"
          >
            HOME
          </button>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [view, setView] = useState('form'); 
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [formData, setFormData] = useState({
    option: '', 
    price: 0, 
    qty: 1, 
    role: '', 
    name: '', 
    phone: '', 
    email: '', 
    note: '',  
    transactionId: '', // Added Transaction ID
    course: '', 
    id: '', 
    batch: '', 
    yearSem: '', 
    university: 'none'
  });

  const pricingOptions = [
    { label: "20 Pcs (Pre-order)", price: 50, id: "opt1", sub: "Save ₹10" },
    { label: "8 Pcs (Pre-order)", price: 20, id: "opt2", sub: "Early Bird" },
    { label: "9 Pcs (On Stall)", price: 30, id: "opt3", sub: "Regular" },
    { label: "6 Pcs (On Stall)", price: 20, id: "opt4", sub: "Quick Snack" },
  ];

  const handleRoleChange = (role) => {
    const isStudent = role === 'student';
    setFormData(prev => ({ 
      ...prev, role, 
      course: isStudent ? '' : 'NA', id: isStudent ? '' : 'NA', batch: isStudent ? '' : 'NA', yearSem: isStudent ? '' : 'NA'
    }));
  };

  const handleInitialSubmit = (e) => {
    e.preventDefault();
    if (!formData.option || !formData.role) {
      alert("Please select your pack and role!");
      return;
    }
    if (formData.phone.length !== 10) {
      alert("Please enter a valid 10-digit phone number!");
      return;
    }
    setView('payment');
  };

  const processOrder = async (fileData) => {
    setLoading(true);
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwIbgl8E2ZDUeH817B8fxR9edW65ahb2LVseKMuP7tajBYOvhDdK6kuOw_0IX8jWmLU/exec";
    const generatedId = 'HM' + Math.floor(Math.random() * 1000000);
    
    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          ...formData, 
          orderId: generatedId,
          image: fileData?.base64,
          imageName: fileData?.name,
          imageType: fileData?.type
        })
      });

      setOrderId(generatedId);
      setLoading(false);
      setView('success');
    } catch (error) {
      console.error("Sheet Error:", error);
      alert("System busy. Please try again!");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fffcf5] py-12 px-4 selection:bg-pink-200">
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden opacity-10">
        <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-pink-400 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-yellow-400 rounded-full blur-[100px]"></div>
        <div className="absolute top-[40%] right-[20%] w-64 h-64 bg-orange-400 rounded-full blur-[80px]"></div>
      </div>

      {view === 'form' && (
        <SelectionView 
          formData={formData} 
          setFormData={setFormData} 
          handleInitialSubmit={handleInitialSubmit} 
          handleRoleChange={handleRoleChange} 
          loading={loading} 
          pricingOptions={pricingOptions} 
        />
      )}
      
      {view === 'payment' && (
        <PaymentView 
          formData={formData} 
          setFormData={setFormData}
          onPaymentComplete={processOrder} 
          loading={loading} 
        />
      )}

      {view === 'success' && (
        <SuccessView formData={formData} orderId={orderId} />
      )}

      <footer className="mt-12 text-center text-gray-400 text-sm">
        <p>© 2026 Golgappa Junction | Powered by College Fest Committee</p>
      </footer>
    </div>
  );
}
