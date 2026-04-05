/**
 * 1. Get form data using event.target
 *    → event.target.<inputName>.value
 *
 * 2. Get form data using FormData (via form action/handler)
 *    → formData.get('<inputName>')
 *
 * 3. Controlled form fields (using useState)
 *    → Handle input changes with onChange
 *    → Validate on submit or during input (dynamic validation)
 *    → Typically one state per field
 *
 * 4. Manage all controlled fields in a single state object
 *    const [formData, setFormData] = useState({
 *        name: '',
 *        password: '',
 *        phone: '',
 *    });
 *
 * 5. Uncontrolled form fields using useRef
 *    → Access values via ref.current.value
 */