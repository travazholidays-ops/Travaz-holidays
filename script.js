function scrollToBooking() {
  document.getElementById('booking').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

function openDateTimePicker(el) {
  el.focus();
  if (typeof el.showPicker === "function") {
    setTimeout(() => el.showPicker(), 50);
  }
}

function pad2(n){ return String(n).padStart(2,'0'); }

function formatDDMMYYYY(dtLocalValue){
  if(!dtLocalValue) return '';
  const d = new Date(dtLocalValue);
  const dd = pad2(d.getDate());
  const mm = pad2(d.getMonth()+1);
  const yyyy = d.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}

function formatTo12HourFromDT(dtLocalValue){
  if(!dtLocalValue) return '';
  const d = new Date(dtLocalValue);
  let h = d.getHours();
  const m = pad2(d.getMinutes());
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  return `${h}:${m} ${ampm}`;
}

function setMinNowForDatetimeLocal(input){
  const now = new Date();
  now.setSeconds(0,0);

  const localISO = new Date(now.getTime() - now.getTimezoneOffset()*60000)
    .toISOString()
    .slice(0,16);

  input.min = localISO;
}

const pickupDT = document.querySelector('input[name="pickupDT"]');
const dropDT   = document.querySelector('input[name="dropDT"]');
const durationDisplay = document.getElementById('durationDisplay');

document.addEventListener('DOMContentLoaded', function() {
  if (pickupDT) setMinNowForDatetimeLocal(pickupDT);
  if (dropDT) setMinNowForDatetimeLocal(dropDT);
});

function calculateDurationDT(){
  if (!pickupDT.value || !dropDT.value) {
    durationDisplay.style.display = 'none';
    return;
  }

  const start = new Date(pickupDT.value);
  const end   = new Date(dropDT.value);

  const diffMs = end - start;
  if (diffMs < 0) {
    durationDisplay.style.display = 'none';
    return;
  }

  const days = Math.ceil(diffMs / (1000 * 3600 * 24)) + 1;
  durationDisplay.textContent = `Duration: ${days} day${days > 1 ? 's' : ''}`;
  durationDisplay.style.display = 'block';
}

if (pickupDT && dropDT) {
  pickupDT.addEventListener('change', () => {
    if (pickupDT.value) {
      dropDT.min = pickupDT.value;

      if (dropDT.value && new Date(dropDT.value) < new Date(pickupDT.value)) {
        dropDT.value = '';
      }
    }
    calculateDurationDT();
  });

  dropDT.addEventListener('change', () => {
    calculateDurationDT();
  });
}

document.querySelectorAll('.vehicle-item').forEach(item => {
  item.addEventListener('click', () => {
    const val = item.getAttribute('data-value');
    document.getElementById('vehicleInput').value = val;
    document.getElementById('vehicleBtn').textContent = val;

    const modalEl = document.getElementById('vehicleModal');
    const modal = bootstrap.Modal.getInstance(modalEl);
    modal.hide();
  });
});

const accToggleWrap = document.getElementById('accToggleWrap');
const accommodationDetails = document.getElementById('accommodationDetails');

const adultsInput = document.getElementById('adultsInput');
const childrenInput = document.getElementById('childrenInput');

const adultMinus = document.getElementById('adultMinus');
const adultPlus  = document.getElementById('adultPlus');
const childMinus = document.getElementById('childMinus');
const childPlus  = document.getElementById('childPlus');

const childAgesWrap = document.getElementById('childAgesWrap');
const childAgesContainer = document.getElementById('childAgesContainer');
const childAgeError = document.getElementById('childAgeError');

function setAccToggleActive() {
  const labels = accToggleWrap.querySelectorAll('label.btn');
  labels.forEach(l => l.classList.remove('active'));
  const checked = accToggleWrap.querySelector('input[name="accommodation"]:checked');
  if (checked) checked.closest('label.btn').classList.add('active');
}

function getAccommodationValue() {
  const el = document.querySelector('input[name="accommodation"]:checked');
  return el ? el.value : 'No';
}

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function buildChildAgeSelect(index) {
  const col = document.createElement('div');
  col.className = 'col-md-3 col-6';

  const label = document.createElement('label');
  label.className = 'form-label';
  label.textContent = `Kid ${index + 1} Age`;

  const select = document.createElement('select');
  select.className = 'form-select child-age';
  select.name = `childAge_${index + 1}`;
  select.required = true;

  const opt0 = document.createElement('option');
  opt0.value = '';
  opt0.textContent = '-- Age --';
  select.appendChild(opt0);

  for (let a = 0; a <= 12; a++) {
    const opt = document.createElement('option');
    opt.value = String(a);
    opt.textContent = String(a);
    select.appendChild(opt);
  }

  col.appendChild(label);
  col.appendChild(select);
  return col;
}

function renderChildAgeFields() {
  const c = parseInt(childrenInput.value || '0', 10);

  childAgesContainer.innerHTML = '';
  childAgeError.style.display = 'none';

  if (c > 0) {
    childAgesWrap.style.display = 'block';
    for (let i = 0; i < c; i++) {
      childAgesContainer.appendChild(buildChildAgeSelect(i));
    }
  } else {
    childAgesWrap.style.display = 'none';
  }
}

function toggleAccommodationBlock() {
  const acc = getAccommodationValue();
  setAccToggleActive();

  if (acc === 'Yes') {
    accommodationDetails.style.display = 'block';
    adultsInput.value = String(clamp(parseInt(adultsInput.value || '1', 10), 1, 20));
    childrenInput.value = String(clamp(parseInt(childrenInput.value || '0', 10), 0, 10));
    renderChildAgeFields();
  } else {
    accommodationDetails.style.display = 'none';
    adultsInput.value = '1';
    childrenInput.value = '0';
    childAgesContainer.innerHTML = '';
    childAgesWrap.style.display = 'none';
    childAgeError.style.display = 'none';
  }
}

document.querySelectorAll('input[name="accommodation"]').forEach(r => {
  r.addEventListener('change', toggleAccommodationBlock);
});

adultMinus.addEventListener('click', () => {
  adultsInput.value = String(clamp(parseInt(adultsInput.value, 10) - 1, 1, 20));
});

adultPlus.addEventListener('click', () => {
  adultsInput.value = String(clamp(parseInt(adultsInput.value, 10) + 1, 1, 20));
});

childMinus.addEventListener('click', () => {
  childrenInput.value = String(clamp(parseInt(childrenInput.value, 10) - 1, 0, 10));
  renderChildAgeFields();
});

childPlus.addEventListener('click', () => {
  childrenInput.value = String(clamp(parseInt(childrenInput.value, 10) + 1, 0, 10));
  renderChildAgeFields();
});

setAccToggleActive();
toggleAccommodationBlock();

function markInvalid(el, invalid) {
  if (!el) return;
  if (invalid) el.classList.add('is-invalid');
  else el.classList.remove('is-invalid');
}

function validateTripPlanRequired() {
  const intermediate = document.querySelector('input[name="intermediate"]');
  const ok = intermediate && intermediate.value.trim().length > 0;
  markInvalid(intermediate, !ok);
  return ok;
}

function validateDatesOrder(data) {
  if (!data.pickupDT || !data.dropDT) return true;
  return new Date(data.dropDT) >= new Date(data.pickupDT);
}

function validateAccommodationDetails() {
  const acc = getAccommodationValue();
  if (acc !== 'Yes') return true;

  const adults = parseInt(adultsInput.value || '0', 10);
  const adultsOk = adults >= 1;
  markInvalid(adultsInput, !adultsOk);

  const children = parseInt(childrenInput.value || '0', 10);
  if (children > 0) {
    const selects = childAgesContainer.querySelectorAll('select.child-age');
    let allSelected = true;
    selects.forEach(s => { if (!s.value) allSelected = false; });
    childAgeError.style.display = allSelected ? 'none' : 'block';
    return adultsOk && allSelected;
  } else {
    childAgeError.style.display = 'none';
    return adultsOk;
  }
}

function validateNativeRequired(form) {
  const inputs = form.querySelectorAll('input, select, textarea, button');
  let allOk = true;

  inputs.forEach(el => {
    if (el.closest('#accommodationDetails') && getAccommodationValue() !== 'Yes') {
      markInvalid(el, false);
      return;
    }

    if (el.required) {
      const ok = el.checkValidity();
      markInvalid(el, !ok);
      if (!ok) allOk = false;
    } else {
      if (el.classList.contains('is-invalid') && el.checkValidity()) {
        markInvalid(el, false);
      }
    }
  });

  return allOk;
}

document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const form = this;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  const tripOk = validateTripPlanRequired();
  const nativeOk = validateNativeRequired(form);

  const datesOk = validateDatesOrder(data);
  if (!datesOk) {
    markInvalid(dropDT, true);
  }

  const accOk = validateAccommodationDetails();

  if (!tripOk || !nativeOk || !datesOk || !accOk) {
    const firstInvalid = form.querySelector('.is-invalid');
    if (firstInvalid) {
      firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
      firstInvalid.focus({ preventScroll: true });
    }
    return;
  }

  const acc = getAccommodationValue();
  let accommodationLines = `🏨 Accommodation Required: ${acc}`;

  if (acc === 'Yes') {
    const adults = adultsInput.value;
    const children = childrenInput.value;

    accommodationLines += `\n👨 Adults: ${adults}\n🧒 Kids: ${children}`;

    if (parseInt(children, 10) > 0) {
      const ages = Array.from(childAgesContainer.querySelectorAll('select.child-age'))
        .map(s => s.value)
        .filter(Boolean);
      accommodationLines += `\n🎂 Kid Ages: ${ages.join(', ')}`;
    }
  }

  const pickupText = `${formatDDMMYYYY(data.pickupDT)} ${formatTo12HourFromDT(data.pickupDT)}`;
  const dropText   = `${formatDDMMYYYY(data.dropDT)} ${formatTo12HourFromDT(data.dropDT)}`;

  const message = `Hi! I want to book a trip with travaz Holidays:

📋 BOOKING DETAILS:
👤 Name: ${data.name}
📞 Phone: ${data.phone}
📍 Pickup: ${data.pickup}
📍 Drop: ${data.drop}
🗺️ Trip Plan / Places to Visit: ${data.intermediate}
📅 Pickup: ${pickupText}
📅 Drop: ${dropText}
🚗 Vehicle: ${data.vehicle}
👥 Passengers: ${data.passengers}

${accommodationLines}
${data.additional ? `\n📝 Special Requirements: ${data.additional}` : ''}

Please provide itinerary and pricing. Thank you!`;

  const whatsappURL = `https://wa.me/919591373534?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, '_blank');
});

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  if (window.scrollY > 50) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

const intermediateEl = document.querySelector('input[name="intermediate"]');
if (intermediateEl) {
  intermediateEl.addEventListener('input', validateTripPlanRequired);
  intermediateEl.addEventListener('blur', validateTripPlanRequired);
}

function openWhatsApp(){
  const message = "Hi travaz Holidays, I want to plan a South India trip.";
  const url = "https://wa.me/919591373534?text=" + encodeURIComponent(message);
  window.open(url, '_blank');
}
